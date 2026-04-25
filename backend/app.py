from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
# from aiassistant import get_ai_response

from google import genai
# client = genai.Client(api_key="AIzaSyD9_MYBZOtQcABk-1zJrxJtbLMLrWpJoxc")
# Try this if the error persists:
client = genai.Client(api_key="AIzaSyD9_MYBZOtQcABk-1zJrxJtbLMLrWpJoxc", http_options={'api_version': 'v1'})

def get_ai_response(user_message):
    try:
        # NOTE: The method is generate_content, not just generate
        response = client.models.generate_content(
            model='gemini-2.0-flash', 
            contents=user_message
        )
        return response.text
    except Exception as e:
        print(f"Backend Error: {e}")
        return f"AI Error: {str(e)}"
# 🔥 Flask app
app = Flask(__name__)
CORS(app)  # Allow React frontend to access backend

# 🔗 MySQL Config
app.config['MYSQL_HOST'] = '127.0.0.1'        # localhost also works
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '@bjRk14/'    # replace with your password
app.config['MYSQL_DB'] = 'elearning'          # your database name
app.config['MYSQL_PORT'] = 3306
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

# 🔌 Initialize MySQL
mysql = MySQL(app)


@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_query = data.get('message')
    
    if not user_query:
        return jsonify({"reply": "Kuch toh pucho! 🤔"}), 400

    # AI se answer mangao
    answer = get_ai_response(user_query)
    
    return jsonify({"reply": answer})

# --- FEATURE 2: Save Smart Notes ---
# @app.route('/api/save-note', methods=['POST'])
# def save_note():
#     try:
#         data = request.json
#         u_id = data.get('user_id')
#         topic = data.get('topic')
#         content = data.get('note')
#         v_time = data.get('time') # Video ka current timestamp (e.g. 02:45)

#         cur = mysql.connection.cursor()
#         cur.execute("""
#             INSERT INTO student_notes (user_id, topic_name, note_content, video_timestamp) 
#             VALUES (%s, %s, %s, %s)
#         """, (u_id, topic, content, v_time))
        
#         mysql.connection.commit()
#         cur.close()
        
#         return jsonify({"status": "success", "message": "Smart Note saved!"})
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500


# @app.route('/api/save-note', methods=['POST'])
# def save_note():
#     try:
#         data = request.json
#         u_id = data.get('user_id')
#         topic = data.get('topic')
#         content = data.get('note')
#         v_time = data.get('time')

#         cur = mysql.connection.cursor()
        
#         # 1. Note save query
#         cur.execute("""
#             INSERT INTO student_notes (user_id, topic_name, note_content, video_timestamp) 
#             VALUES (%s, %s, %s, %s)
#         """, (u_id, topic, content, v_time))
        
#         # 2. XP Update (+20 points)
#         cur.execute("UPDATE users SET xp = xp + 20 WHERE id = %s", [u_id])
        
#         # 3. Level Check logic
#         cur.execute("SELECT xp FROM users WHERE id = %s", [u_id])
#         result = cur.fetchone()
#         current_xp = int(result[0]) if result else 0
#         new_level = (current_xp // 100) + 1
        
#         cur.execute("UPDATE users SET level = %s WHERE id = %s", (new_level, u_id))
        
#         mysql.connection.commit()
#         cur.close()
        
#         return jsonify({
#             "status": "success", 
#             "message": "Note saved! You gained 20 XP 🔥",
#             "xp": current_xp,
#             "level": new_level
#         })

#     except Exception as e:
#         print("Error details:", str(e))
#         return jsonify({"error": str(e)}), 500

# # ✅ Fetch all notes for a specific user
# @app.route('/api/notes/<int:user_id>', methods=['GET'])
# def get_notes(user_id):
#     try:
#         cur = mysql.connection.cursor()
#         # Using the column names from your DESCRIBE student_notes screenshot
#         cur.execute("""
#             SELECT id, user_id, note_content, video_timestamp, topic_name 
#             FROM student_notes 
#             WHERE user_id = %s 
#             ORDER BY id DESC
#         """, [user_id])
        
#         notes = cur.fetchall()
#         cur.close()
        
#         # Since we use DictCursor, this will return a list of dictionaries
#         return jsonify(notes)
#     except Exception as e:
#         print("Fetch Error:", str(e))
#         return jsonify({"error": str(e)}), 500


@app.route('/api/save-note', methods=['POST'])
def save_note():
    try:
        data = request.get_json()
        user_id = data.get('user_id')
        topic = data.get('topic')
        note_content = data.get('note')
        time = data.get('time')

        cur = mysql.connection.cursor()
        
        # 1. Note ko save karein
        cur.execute("""
            INSERT INTO student_notes (user_id, topic_name, note_content, video_timestamp) 
            VALUES (%s, %s, %s, %s)
        """, (user_id, topic, note_content, time))

        # 2. XP Update karein (Users table mein)
        cur.execute("UPDATE users SET xp = xp + 20 WHERE ID = %s", [user_id])
        
        # 3. Updated XP aur Level wapas lein taaki React ko mile
        cur.execute("SELECT xp, level FROM users WHERE ID = %s", [user_id])
        user_stats = cur.fetchone()
        
        mysql.connection.commit()
        cur.close()

        return jsonify({
            "status": "success",
            "xp": user_stats['xp'], # Agar DictCursor hai toh 'xp', warna user_stats[0]
            "level": user_stats['level']
        })
    except Exception as e:
        print("Backend Error:", str(e)) # Terminal mein error dikhega
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/api/delete-note/<int:id>', methods=['DELETE'])
def delete_note(id):
    print("DELETE API HIT", id)
    try:
        cur = mysql.connection.cursor()
        cur.execute("DELETE FROM student_notes WHERE id = %s", [id])
        mysql.connection.commit()
        cur.close()

        return jsonify({"message": "Note deleted ✅"})
    except Exception as e:
        return jsonify({"error": str(e)})



# ✅ Test route
# @app.route('/')
# def home():
#     try:
#         cur = mysql.connection.cursor()
#         cur.execute("SELECT DATABASE();")
#         db_name = cur.fetchone()
#         return "Connected to database: {db_name['DATABASE()']} ✅"
#     except Exception as e:
#         print("Error:", e)
#         return jsonify({"error": str(e)})

@app.route('/')
def home():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT DATABASE();")
        db_name = cur.fetchone()
        cur.close()
        # Fixed the string formatting here
        return f"<h1>Connected to database: {db_name['DATABASE()']} ✅</h1>"
    except Exception as e:
        return jsonify({"error": str(e)})

# ✅ Signup route
@app.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        print("Received data:", data)

        name = data['name']
        password = data['password']
        mobile = data['mobile']

        cur = mysql.connection.cursor()

        # 🔍 CHECK if user already exists
        cur.execute(
            "SELECT * FROM users WHERE name=%s OR mobile=%s",
            (name, mobile)
        )
        existing_user = cur.fetchone()

        if existing_user:
            return jsonify({"message": "You are already registered ❌"})

        # ✅ INSERT new user
        cur.execute(
            "INSERT INTO users (name, password, mobile) VALUES (%s, %s, %s)",
            (name, password, mobile)
        )
        mysql.connection.commit()
        cur.close()

        return jsonify({"message": "Signup successful ✅"})

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)})
# ✅ Login route
@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        name = data['name']
        password = data['password']

        cur = mysql.connection.cursor()
        cur.execute(
            "SELECT * FROM users WHERE name=%s AND password=%s",
            (name, password)
        )
        user = cur.fetchone()
        cur.close()

        if user:
            return jsonify({
            "message": "Login successful ✅",
            "user_id": user['id']
            })
        else:
            return jsonify({"message": "Invalid credentials ❌"})
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)})


        # ✅ Select Course
@app.route('/select-course', methods=['POST'])
def select_course():
    try:
        data = request.get_json()

        user_id = data['user_id']
        course = data['course']

        cur = mysql.connection.cursor()

        cur.execute(
            "INSERT INTO courses (user_id, course_name) VALUES (%s, %s)",
            (user_id, course)
        )

        mysql.connection.commit()
        cur.close()

        return jsonify({"message": "Course selected successfully ✅"})

    except Exception as e:
        return jsonify({"error": str(e)})

# ✅ Get all users
@app.route('/users', methods=['GET'])
def get_users():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users")
        users = cur.fetchall()
        cur.close()
        return jsonify(users)
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)})

# 🔥 Run app
if __name__ == '__main__':
    print("FILE RUN HO RAHI HAI 🔥")
    print(app.url_map)
    app.run(debug=True, use_reloader=False)


