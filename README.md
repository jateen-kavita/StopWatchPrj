Stopwatch Project Documentation

Introduction
The Stopwatch Project is developed using HTML5, CSS3, and Vanilla JavaScript. The project incorporates a theme toggle button for switching between Light Mode and Dark Mode, and utilizes modern design techniques such as Glassmorphism. The project is structured using semantic HTML tags and includes local regional language support for button labels to enhance user experience.

HTML
Structure: The webpage is structured using semantic HTML5 tags for better readability and context.
Theme Toggle: A toggle button is included to switch between Light Mode and Dark Mode.

CSS
Glassmorphism: The design incorporates a Glassmorphism effect to provide a modern and trendy look.
Theme Switch: CSS classes are used to switch between light and dark themes based on user selection.
Local Language: Button labels are written in a regional language to stand out and offer a unique user experience.

JavaScript
Two main functionalities are implemented using Vanilla JavaScript:

1. Toggle Theme Logic
2. Stopwatch Functionality

Toggle Theme Logic:

Two classes, .lightmode, and .darkmode, are used to represent the light and dark themes, respectively.
When the user switches to Dark Mode, the dark mode class is added and the Light Mode class is removed, and vice versa for switching back to Light Mode.

Stopwatch Functionality:

Time Calculation: The stopwatch tracks time in seconds, minutes, and hours. 60 seconds make 1 minute, and 60 minutes make 1 hour.
Real-Time Updates: The time is dynamically updated using setInterval with a 1000ms (1 second) interval.
Pause Functionality: The clearInterval function is used to pause the stopwatch when the pause button is pressed.
Stop Functionality: The stop button uses clearInterval to halt the stopwatch and resets the time variables to their default values.
User Interface
The stopwatch UI dynamically changes according to the selected theme (Light Mode or Dark Mode).

Conclusion
The Stopwatch Project effectively demonstrates the use of HTML5, CSS3, and Vanilla JavaScript to create a modern, user-friendly application with dynamic time-tracking and theme-switching capabilities.
