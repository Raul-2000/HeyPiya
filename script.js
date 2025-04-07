document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded!'); // Debugging line

    // Background Slideshow
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    showSlide(currentSlide);

    // Language Toggle
    const translations = {
        en: {
            homeLink: "Home",
            aboutLink: "About",
            contactLink: "Contact",
            songsLink: "Songs for You",
            photosLink: "Photos",
            storiesLink: "Long Love Stories",
            greeting: "Welcome to Our Little Space",
            welcomeMessage: "A place where our hearts connect and our story unfolds.",
            aboutTitle: "About Us",
            aboutText: "This is where we can share a little bit about ourselves and our journey together. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            contactTitle: "Contact Me",
            contactMessage: "Feel free to reach out!",
            submitBtn: "Send Message",
            songsTitle: "Songs Just for You",
            songsMessage: "A collection of songs that remind me of us.",
            photosTitle: "Our Special Moments",
            storiesTitle: "Our Long Love Stories",
            storiesMessage: "Heartfelt stories that speak of enduring love.",
            feedbackTitle: "Send Your Thoughts",
            feedbackMessage: "Share your feedback or anything on your mind.",
            submitFeedbackBtn: "Send Feedback"
        },
        pa: {
            homeLink: "ਘਰ",
            aboutLink: "ਬਾਰੇ",
            contactLink: "ਸੰਪਰਕ ਕਰੋ",
            songsLink: "ਤੁਹਾਡੇ ਲਈ ਗੀਤ",
            photosLink: "ਤਸਵੀਰਾਂ",
            storiesLink: "ਲੰਬੀਆਂ ਪ੍ਰੇਮ ਕਹਾਣੀਆਂ",
            greeting: "ਸਾਡੀ ਛੋਟੀ ਜਿਹੀ ਥਾਂ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ",
            welcomeMessage: "ਇੱਕ ਅਜਿਹੀ ਜਗ੍ਹਾ ਜਿੱਥੇ ਸਾਡੇ ਦਿਲ ਜੁੜਦੇ ਹਨ ਅਤੇ ਸਾਡੀ ਕਹਾਣੀ ਸਾਹਮਣੇ ਆਉਂਦੀ ਹੈ।",
            aboutTitle: "ਸਾਡੇ ਬਾਰੇ",
            aboutText: "ਇਹ ਉਹ ਥਾਂ ਹੈ ਜਿੱਥੇ ਅਸੀਂ ਆਪਣੇ ਬਾਰੇ ਅਤੇ ਸਾਡੇ ਇਕੱਠੇ ਸਫ਼ਰ ਬਾਰੇ ਥੋੜ੍ਹਾ ਸਾਂਝਾ ਕਰ ਸਕਦੇ ਹਾਂ। ਲੋਰੇਮ ਇਪਸਮ ਡਾਲਰ ਸਿਟ ਅਮੇਟ, ਸੰਸਕ੍ਰਿਪਟ ਐਡੀਪਿਸਿੰਗ ਐਲੀਟ। ਸੇਡ ਡੂ ਈਯੂਸਮੌਡ ਟੈਂਪਰ ਇੰਸੀਡਿਡੰਟ ਯੂਟੀ ਲੈਬੋਰ ਐਟ ਡੋਲੋਰ ਮੈਗਨਾ ਐਲੀਕੁਆ। ਯੂਟੀ ਐਨਿਮ ਐਡ ਮਿਨੀਮ ਵੈਨਿਅਮ, ਕੁਇਸ ਨੋਸਟਰਡ ਐਕਸਰਸਾਈਟੇਸ਼ਨ ਉਲੈਮਕੋ ਲੈਬੋਰਿਸ ਨੀਸੀ ਯੂਟੀ ਐਲੀਕੁਇਪ ਐਕਸ ਈਏ ਕਾਮੋਡੋ ਕੌਨਸੈਕਟ।",
            contactTitle: "ਮੇਰੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
            contactMessage: "ਬੇਝਿਜਕ ਸੰਪਰਕ ਕਰੋ!",
            submitBtn: "ਸੁਨੇਹਾ ਭੇਜੋ",
            songsTitle: "ਸਿਰਫ਼ ਤੁਹਾਡੇ ਲਈ ਗੀਤ",
            songsMessage: "ਉਨ੍ਹਾਂ ਗੀਤਾਂ ਦਾ ਸੰਗ੍ਰਹਿ ਜੋ ਮੈਨੂੰ ਸਾਡੀ ਯਾਦ ਦਿਵਾਉਂਦੇ ਹਨ।",
            photosTitle: "ਸਾਡੇ ਖਾਸ ਪਲ",
            storiesTitle: "ਸਾਡੀਆਂ ਲੰਬੀਆਂ ਪ੍ਰੇਮ ਕਹਾਣੀਆਂ",
            storiesMessage: "ਦਿਲੋਂ ਭਰੀਆਂ ਕਹਾਣੀਆਂ ਜੋ ਸਦੀਵੀ ਪਿਆਰ ਦੀ ਗੱਲ ਕਰਦੀਆਂ ਹਨ।",
            feedbackTitle: "ਆਪਣੇ ਵਿਚਾਰ ਭੇਜੋ",
            feedbackMessage: "ਆਪਣੀ ਫੀਡਬੈਕ ਜਾਂ ਤੁਹਾਡੇ ਮਨ ਵਿੱਚ ਕੁਝ ਵੀ ਸਾਂਝਾ ਕਰੋ।",
            submitFeedbackBtn: "ਫੀਡਬੈਕ ਭੇਜੋ"
        },
        hi: {
            homeLink: "होम",
            aboutLink: "हमारे बारे में",
            contactLink: "संपर्क करें",
            songsLink: "आपके लिए गाने",
            photosLink: "तस्वीरें",
            storiesLink: "लंबी प्रेम कहानियाँ",
            greeting: "हमारी छोटी सी जगह में आपका स्वागत है",
            welcomeMessage: "एक ऐसी जगह जहाँ हमारे दिल जुड़ते हैं और हमारी कहानी सामने आती है।",
            aboutTitle: "हमारे बारे में",
            aboutText: "यह वह जगह है जहाँ हम अपने बारे में और हमारी एक साथ यात्रा के बारे में थोड़ा साझा कर सकते हैं। लोरेम इप्सम डोलर सिट अमेत, कॉन्सेक्टेटुर एडिपिसिंग एलिट। सेड डू इयूसमॉड टेम्पोर इनसिडिडंट यूटी लेबोर एट डोलोर मैग्ना एलिक्वा। यूटी एनम एड मिनिम वेनियम, क्विस नॉस्ट्रड एक्सरसाइजेशन उल्लामको लेबोरिस निसी यूटी एलिक्प एक्स ईए कोमोडो कॉन्सक्वेट।",
            contactTitle: "मुझसे संपर्क करें",
            contactMessage: "बेझिझक संपर्क करें!",
            submitBtn: "संदेश भेजें",
            songsTitle: "सिर्फ तुम्हारे लिए गाने",
            songsMessage: "उन गानों का संग्रह जो मुझे हमारी याद दिलाते हैं।",
            photosTitle: "हमारे खास पल",
            storiesTitle: "हमारी लंबी प्रेम कहानियाँ",
            storiesMessage: "दिल से भरी कहानियाँ जो शाश्वत प्रेम की बात करती हैं।",
            feedbackTitle: "अपने विचार भेजें",
            feedbackMessage: "अपनी प्रतिक्रिया या आपके मन में कुछ भी साझा करें।",
            submitFeedbackBtn: "प्रतिक्रिया भेजें"
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

    // Basic smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple feedback submission alert
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const feedbackText = document.getElementById('feedbackText').value;
            alert(`Thank you for your feedback: ${feedbackText}`);
            feedbackForm.reset(); // Clear the form after submission
        });
    }

    // Simple contact form submission alert
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            alert(`Thank you for your message, ${name}! We will get back to you soon.`);
            contactForm.reset(); // Clear the form after submission
        });
    }
});
