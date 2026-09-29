// script.js

// Helper function to log events to the page
function logEvent(eventName, details = '') {
    const logList = document.getElementById('logList');
    const listItem = document.createElement('li');
    const time = new Date().toLocaleTimeString();
    listItem.textContent = `[${time}] Event Triggered: ${eventName} ${details}`;
    
    // Add new log to the top
    logList.prepend(listItem);
    
    // Keep log from growing too large (optional)
    if (logList.children.length > 15) {
        logList.removeChild(logList.lastChild);
    }
}

// 1. click
document.getElementById('clickBtn').addEventListener('click', () => {
    logEvent('click');
});

// 2. dblclick (Double Click)
document.getElementById('dblClickBtn').addEventListener('dblclick', () => {
    logEvent('dblclick');
});

// 3. mouseenter
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => {
    logEvent('mouseenter', '- Mouse entered the box');
    hoverBox.style.backgroundColor = '#dff9fb';
});

// 4. mouseleave
hoverBox.addEventListener('mouseleave', () => {
    logEvent('mouseleave', '- Mouse left the box');
    hoverBox.style.backgroundColor = '#ecf0f1';
});

// 5. keydown
const textInput = document.getElementById('textInput');
textInput.addEventListener('keydown', (e) => {
    logEvent('keydown', `- Key pressed: ${e.key}`);
});

// 6. keyup
textInput.addEventListener('keyup', (e) => {
    logEvent('keyup', `- Key released: ${e.key}`);
});

// 7. keypress (Note: deprecated, but still works for demonstration of different events)
textInput.addEventListener('keypress', (e) => {
    logEvent('keypress', `- Character typed: ${e.key}`);
});

// 8. focus
const focusInput = document.getElementById('focusInput');
focusInput.addEventListener('focus', () => {
    logEvent('focus', '- Input field focused');
    focusInput.style.borderColor = '#3498db';
    focusInput.style.outline = 'none';
});

// 9. blur
focusInput.addEventListener('blur', () => {
    logEvent('blur', '- Input field lost focus');
    focusInput.style.borderColor = '#ccc';
});

// 10. change
document.getElementById('selectBox').addEventListener('change', (e) => {
    logEvent('change', `- Value changed to: Option ${e.target.value}`);
});

// 11. submit
document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    logEvent('submit', '- Form submitted');
});

// 12. reset
document.getElementById('myForm').addEventListener('reset', () => {
    logEvent('reset', '- Form reset');
});

// 13. contextmenu (Right Click)
document.getElementById('rightClickBox').addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Prevent default browser context menu
    logEvent('contextmenu', '- Custom right-click action');
});

// 14. wheel
document.getElementById('scrollBox').addEventListener('wheel', (e) => {
    const direction = e.deltaY > 0 ? 'Down' : 'Up';
    logEvent('wheel', `- Scrolled ${direction}`);
});

// 15. dragstart
const draggableBox = document.getElementById('draggableBox');
draggableBox.addEventListener('dragstart', () => {
    logEvent('dragstart', '- Started dragging element');
    draggableBox.style.opacity = '0.5';
});

// 16. dragend
draggableBox.addEventListener('dragend', () => {
    logEvent('dragend', '- Finished dragging element');
    draggableBox.style.opacity = '1';
});

// 17. copy
document.getElementById('copyText').addEventListener('copy', () => {
    logEvent('copy', '- Text copied to clipboard');
});

// 18. paste
document.getElementById('pasteInput').addEventListener('paste', () => {
    logEvent('paste', '- Content pasted into input');
});

// 19. resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('resizeText').textContent = `Window size: ${width}x${height}`;
    logEvent('resize', `- Window resized to ${width}x${height}`);
});

// 20. load
window.addEventListener('load', () => {
    document.getElementById('loadText').textContent = 'Page loaded successfully!';
    logEvent('load', '- Entire page finished loading');
});