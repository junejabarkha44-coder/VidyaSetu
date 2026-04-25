# import google.generativeai as genai

# # Key yahan check karo
# genai.configure(api_key="AIzaSyD9_MYBZOtQcABk-1zJrxJtbLMLrWpJoxc") 

# # Ye naam bilkul same hona chahiye jo tum import kar rahi ho
# def get_ai_response(user_message):
#     try:
#         model = genai.GenerativeModel(''gemini-1.5-flash'')
#         response = model.generate_content(user_message)
#         return response.text
#     except Exception as e:
#         return str(e)



        # Update your configuration line to look like this:
# genai.configure(api_key="AIzaSyD9_MYBZOtQcABk-1zJrxJtbLMLrWpJoxc", transport='rest') 

# def get_ai_response(user_message):
#     try:
#         # Ensure this is exactly 'gemini-3-flash'
#         model = genai.GenerativeModel('gemini-3-flash') 
#         response = model.generate_content(user_message)
#         return response.text
#     except Exception as e:
#         # This will help us see the EXACT new error if it fails
#         print(f"Detailed Error: {e}") 
#         return f"AI Error: {str(e)}"

from google import genai  # Naya 2026 SDK import

# Naya Client setup - Yahan naya API key zaroor daalein
client = genai.Client(api_key="AIzaSyCdl3TJphffpjy8CowcVavpX55f32c7QjA")

def get_ai_response(user_message):
    try:
        # 1. 'generate_content' use karein (underscore ke saath)
        # 2. 'gemini-3.1-flash-lite-preview' use karein, ye 2026 ka latest stable model hai
        response = client.models.generate_content(
            model='gemini-2.0-flash', 
            contents=user_message
        )
        
        # AI ka response return karein
        return response.text
        
    except Exception as e:
        print(f"Backend Error in aiassistant.py: {e}")
        
        # Friendly Error Handling for Student UX
        if "429" in str(e):
            return "AI Tutor thoda busy hai, 1 minute mein dobara puchiye! ⏳"
        elif "404" in str(e):
            return "Model path mismatch. Admin ko check karna hoga. 🛠️"
            
        return f"AI Error: {str(e)}"