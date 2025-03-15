document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded!'); // Debugging line

    // Language Toggle
    const translations = {
        en: {
            greeting: "Good Morning, Riya!",
            welcomeMessage: "Welcome to a space where you can discover everything about me. I hope this brings us closer.",
            continueBtn: "Continue if you're interested in knowing me",
            declarationTitle: "Declaration",
            declarationText: "All the information provided here is true and correct to the best of my knowledge.",
            acknowledgeText: "I acknowledge this declaration.",
            proceedBtn: "Proceed",
            biographyTitle: "What would you like to know about me?",
            viewSelectedBtn: "View Selected Sections",
            selectedTitle: "Here's what you wanted to know:",
            feedbackTitle: "Feedback",
            satisfactionText: "How satisfied are you with the information provided?",
            additionalInfoText: "What else would you like to know?",
            submitFeedbackBtn: "Submit Feedback",
            thankYouTitle: "Thank You, Riya!",
            thankYouMessage: "Your feedback means a lot to me. I hope this brings us closer. 💖"
        },
        pa: {
            greeting: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਰੀਆ!",
            welcomeMessage: "ਇੱਕ ਐਸੀ ਜਗ੍ਹਾ ਤੇ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ ਜਿੱਥੇ ਤੁਸੀਂ ਮੇਰੇ ਬਾਰੇ ਸਭ ਕੁਝ ਜਾਣ ਸਕਦੇ ਹੋ। ਮੈਨੂੰ ਉਮੀਦ ਹੈ ਕਿ ਇਹ ਸਾਨੂੰ ਕਰੀਬ ਲਿਆਵੇਗਾ।",
            continueBtn: "ਜਾਰੀ ਰੱਖੋ ਜੇਕਰ ਤੁਸੀਂ ਮੈਨੂੰ ਜਾਣਨ ਵਿੱਚ ਦਿਲਚਸਪੀ ਰੱਖਦੇ ਹੋ",
            declarationTitle: "ਐਲਾਨ",
            declarationText: "ਇੱਥੇ ਦਿੱਤੀ ਗਈ ਸਾਰੀ ਜਾਣਕਾਰੀ ਮੇਰੇ ਗਿਆਨ ਅਨੁਸਾਰ ਸਹੀ ਅਤੇ ਸੱਚੀ ਹੈ।",
            acknowledgeText: "ਮੈਂ ਇਸ ਐਲਾਨ ਨੂੰ ਮੰਨਦਾ/ਮੰਨਦੀ ਹਾਂ।",
            proceedBtn: "ਜਾਰੀ ਰੱਖੋ",
            biographyTitle: "ਤੁਸੀਂ ਮੇਰੇ ਬਾਰੇ ਕੀ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
            viewSelectedBtn: "ਚੁਣੇ ਗਏ ਭਾਗ ਦੇਖੋ",
            selectedTitle: "ਇਹ ਉਹ ਹੈ ਜੋ ਤੁਸੀਂ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਸੀ:",
            feedbackTitle: "ਫੀਡਬੈਕ",
            satisfactionText: "ਤੁਸੀਂ ਦਿੱਤੀ ਗਈ ਜਾਣਕਾਰੀ ਤੋਂ ਕਿੰਨੇ ਸੰਤੁਸ਼ਟ ਹੋ?",
            additionalInfoText: "ਤੁਸੀਂ ਹੋਰ ਕੀ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
            submitFeedbackBtn: "ਫੀਡਬੈਕ ਦਿਓ",
            thankYouTitle: "ਧੰਨਵਾਦ, ਰੀਆ!",
            thankYouMessage: "ਤੁਹਾਡਾ ਫੀਡਬੈਕ ਮੇਰੇ ਲਈ ਬਹੁਤ ਮਹੱਤਵਪੂਰਨ ਹੈ। ਮੈਨੂੰ ਉਮੀਦ ਹੈ ਕਿ ਇਹ ਸਾਨੂੰ ਕਰੀਬ ਲਿਆਵੇਗਾ। 💖"
        },
        hi: {
            greeting: "सुप्रभात, रिया!",
            welcomeMessage: "एक ऐसी जगह पर आपका स्वागत है जहां आप मेरे बारे में सब कुछ जान सकते हैं। मुझे उम्मीद है कि यह हमें करीब लाएगा।",
            continueBtn: "जारी रखें यदि आप मुझे जानने में रुचि रखते हैं",
            declarationTitle: "घोषणा",
            declarationText: "यहां दी गई सभी जानकारी मेरी जानकारी के अनुसार सही और सत्य है।",
            acknowledgeText: "मैं इस घोषणा को स्वीकार करता/करती हूं।",
            proceedBtn: "जारी रखें",
            biographyTitle: "आप मेरे बारे में क्या जानना चाहते हैं?",
            viewSelectedBtn: "चयनित अनुभाग देखें",
            selectedTitle: "यह वही है जो आप जानना चाहते थे:",
            feedbackTitle: "प्रतिक्रिया",
            satisfactionText: "आप दी गई जानकारी से कितने संतुष्ट हैं?",
            additionalInfoText: "आप और क्या जानना चाहते हैं?",
            submitFeedbackBtn: "प्रतिक्रिया दें",
            thankYouTitle: "धन्यवाद, रिया!",
            thankYouMessage: "आपकी प्रतिक्रिया मेरे लिए बहुत महत्वपूर्ण है। मुझे उम्मीद है कि यह हमें करीब लाएगा। 💖"
        }
    };

    function updateTexts(lang) {
        console.log(`Updating texts to ${lang}`); // Debugging line
        const elements = document.querySelectorAll('[id]');
        elements.forEach(element => {
            if (translations[lang] && translations[lang][element.id]) {
                element.textContent = translations[lang][element.id];
            }
        });
    }

    // Language Toggle Buttons
    document.getElementById('englishBtn').addEventListener('click', () => {
        updateTexts('en');
    });

    document.getElementById('punjabiBtn').addEventListener('click', () => {
        updateTexts('pa');
    });

    document.getElementById('hindiBtn').addEventListener('click', () => {
        updateTexts('hi');
    });

    // Welcome Screen -> Declaration Screen
    document.getElementById('continueBtn').addEventListener('click', () => {
        console.log('Continue button clicked!'); // Debugging line
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('declarationScreen').style.display = 'block';
    });

    // Enable Proceed Button when checkbox is checked
    document.getElementById('declarationCheckbox').addEventListener('change', (e) => {
        console.log('Checkbox clicked!'); // Debugging line
        document.getElementById('proceedBtn').disabled = !e.target.checked;
    });

    // Declaration Screen -> Biography Screen
    document.getElementById('proceedBtn').addEventListener('click', () => {
        console.log('Proceed button clicked!'); // Debugging line
        document.getElementById('declarationScreen').style.display = 'none';
        document.getElementById('biographyScreen').style.display = 'block';
    });

    // Show Selected Sections
    document.getElementById('viewSelectedBtn').addEventListener('click', () => {
        console.log('View Selected Sections button clicked!'); // Debugging line
        // Hide all sections first
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = 'none';
        });

        // Show only the selected sections
        const selectedSections = document.querySelectorAll('input[name="section"]:checked');
        if (selectedSections.length === 0) {
            alert('Please select at least one section to view.');
            return;
        }

        selectedSections.forEach(section => {
            document.getElementById(section.value).style.display = 'block';
        });

        // Show the selected sections container
        document.getElementById('biographyScreen').style.display = 'none';
        document.getElementById('selectedSections').style.display = 'block';
    });

    // Feedback Screen
    document.getElementById('feedbackBtn').addEventListener('click', () => {
        console.log('Feedback button clicked!'); // Debugging line
        document.getElementById('selectedSections').style.display = 'none';
        document.getElementById('feedbackScreen').style.display = 'block';
    });

    // Submit Feedback
    document.getElementById('submitFeedbackBtn').addEventListener('click', () => {
        console.log('Submit Feedback button clicked!'); // Debugging line
        const satisfaction = document.getElementById('satisfaction').value;
        const additionalInfo = document.getElementById('additionalInfo').value;
        alert(`Thank you for your feedback!\nSatisfaction: ${satisfaction}\nAdditional Info: ${additionalInfo}`);
        document.getElementById('feedbackScreen').style.display = 'none';
        document.getElementById('thankYouScreen').style.display = 'block';
    });
});
