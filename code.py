"""
College Helpdesk Chatbot
Topic: College information
Type: Rule-based chatbot using Python if-elif-else conditions

Run in terminal:
    python college_rule_based_chatbot.py
"""

def get_response(user_input):
    """Return a response by matching keywords in the user's message."""
    message = user_input.lower().strip()

    if not message:
        return "Please type a question so I can help."

    elif any(word in message for word in ["hello", "hi", "hey"]):
        return "Hello! Welcome to the College Helpdesk Chatbot. How can I help you?"

    elif "admission" in message or "apply" in message:
        return (
            "For admission information, check the college's official website or contact "
            "the admission office. Keep your marksheets, ID proof, and required documents ready."
        )

    elif "fee" in message or "fees" in message or "payment" in message:
        return (
            "For the latest fee structure and payment deadlines, contact the accounts office "
            "or check the official student portal."
        )

    elif "library" in message or "book" in message:
        return (
            "The library provides books and study resources. Please check the library notice "
            "board or ask the librarian for current opening hours and borrowing rules."
        )

    elif "exam" in message or "timetable" in message or "schedule" in message:
        return (
            "Please check the official examination notice or student portal for the latest "
            "timetable, exam dates, and instructions."
        )

    elif "result" in message or "marks" in message or "grade" in message:
        return (
            "Results and marks are usually published through the official student portal. "
            "Use your authorized login details to check them."
        )

    elif "course" in message or "subject" in message or "syllabus" in message:
        return (
            "For course details and the latest syllabus, consult your department or the "
            "official academic notice/portal."
        )

    elif "scholarship" in message or "financial aid" in message:
        return (
            "Ask the student section about available scholarships, eligibility criteria, "
            "required documents, and application deadlines."
        )

    elif "contact" in message or "phone" in message or "email" in message:
        return (
            "Please use the contact details listed on the college's official website. "
            "I don't have verified current phone numbers or email addresses."
        )

    elif "thank" in message:
        return "You're welcome! Best wishes for your studies."

    elif "bye" in message or "exit" in message or "quit" in message:
        return "Goodbye! Have a great day."

    else:
        return (
            "Sorry, I don't have an answer for that question yet. Try asking about "
            "admissions, fees, library, exams, results, courses, scholarships, or contact details."
        )


def main():
    print("=" * 55)
    print("       COLLEGE HELPDESK RULE-BASED CHATBOT")
    print("Type 'bye' or 'exit' to end the conversation.")
    print("=" * 55)

    while True:
        user_input = input("\nYou: ")
        response = get_response(user_input)
        print("Bot:", response)

        if user_input.lower().strip() in {"bye", "exit", "quit"}:
            break


if __name__ == "__main__":
    main()
