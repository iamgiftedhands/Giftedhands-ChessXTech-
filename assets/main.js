// --- Mobile Menu Toggle Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeButton = document.getElementById('close-menu-button');
    const navLinks = mobileMenu.querySelectorAll('a');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('translate-x-full');
        mobileMenu.classList.toggle('translate-x-0');
    };

    menuButton.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);
    
    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});

// --- Copy to Clipboard Utility ---
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    let textToCopy = element.innerText || element.textContent;

    // Remove any leading/trailing whitespace and labels
    if (elementId === 'whatsapp-number') {
        textToCopy = '09085839865';
    } else if (elementId === 'call-number') {
        textToCopy = '07013203874';
    } else if (elementId === 'email-address') {
        textToCopy = 'emmanuelafolabs@gmail.com';
    }


    const tempInput = document.createElement('textarea');
    tempInput.value = textToCopy.trim();
    document.body.appendChild(tempInput);
    tempInput.select();

    try {
        // Use document.execCommand('copy') for better compatibility in Canvas
        document.execCommand('copy');
        
        // Show Confirmation Message
        const originalText = element.getAttribute('data-original-text');
        if (originalText) {
            element.innerText = 'Copied!';
            element.classList.add('bg-green-600', 'text-white');
            setTimeout(() => {
                element.innerText = originalText;
                element.classList.remove('bg-green-600', 'text-white');
            }, 1000);
        }
    } catch (err) {
        console.error('Failed to copy text: ', err);
        // Fallback for error handling
    } finally {
        document.body.removeChild(tempInput);
    }
}