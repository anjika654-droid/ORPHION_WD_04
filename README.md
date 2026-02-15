# ORPHION_WD_04
Create a personal portfolio to showcase your skills and projects. Must include smooth scrolling and a contact form section.
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Anjika Portfolio</title>
<link rel="stylesheet" href="task4.css">
</head>

<body>

<header>
<nav>
<h2 class="logo">Anjika</h2>
<ul>
<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#experience">Experience</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</nav>
</header>

<section id="home" class="section home">
<h1>Hello, I'm Anjika 👋</h1>
<p>Web Developer | B.Tech CSE Student | Tech Enthusiast</p>
<button onclick="scrollToContact()">Hire Me</button>
</section>

<section id="about" class="section">
<h2>About Me</h2>
<p>
I am a passionate and dedicated B.Tech Computer Science student with a strong interest in Web Development and Software Engineering. 
I enjoy building responsive and user-friendly web applications using HTML, CSS, and JavaScript.
</p>

<p>
I am constantly learning new technologies and improving my problem-solving skills. 
My goal is to become a skilled Full-Stack Developer and contribute to innovative tech projects.
</p>

<h3>Introduction</h3>
<p>
I believe in continuous learning and practical implementation. I have completed multiple hands-on projects 
that helped me understand real-world development practices. I am highly motivated, detail-oriented, 
and always ready to take on new challenges.
</p>
</section>

<section id="projects" class="section">
<h2>Projects</h2>

<div class="project-card">
<h3>Tic Tac Toe Game</h3>
<p>Interactive game built using HTML, CSS, and JavaScript with two-player functionality.</p>
</div>

<div class="project-card">
<h3>Personal Portfolio Website</h3>
<p>Responsive portfolio website with smooth scrolling and contact form functionality.</p>
</div>

<div class="project-card">
<h3>Weather App</h3>
<p>Weather application that fetches real-time weather data using API integration.</p>
</div>

<div class="project-card">
<h3>To-Do List Application</h3>
<p>Task management app with add, delete, and mark-as-complete features using JavaScript.</p>
</div>

<div class="project-card">
<h3>Login & Registration System</h3>
<p>Authentication form with validation using HTML, CSS, and JavaScript.</p>
</div>

</section>

<section id="experience" class="section">
<h2>Experience</h2>

<div class="experience-card">
<h3>Web Development Intern</h3>
<p><strong>Orphion Tech</strong></p>
<p>Worked on frontend development tasks including building responsive UI components and implementing JavaScript functionalities.</p>
</div>

<div class="experience-card">
<h3>Virtual Internship</h3>
<p><strong>JP Morgan Chase & Co. - Software Engineering Simulation</strong></p>
<p>Completed practical tasks involving financial data visualization and problem-solving using programming concepts.</p>
</div>

<div class="experience-card">
<h3>Web Development Certification</h3>
<p><strong>Simplilearn SkillUp</strong></p>
<p>Successfully completed Web Development for Beginners course and built multiple practice projects.</p>
</div>

</section>

<section id="contact" class="section">
<h2>Contact Me</h2>
<form id="contactForm">
<input type="text" placeholder="Your Name" required>
<input type="email" placeholder="Your Email" required>
<textarea placeholder="Your Message" required></textarea>
<button type="submit">Send Message</button>
</form>
</section>

<footer>
<p>© 2026 Anjika Portfolio</p>
</footer>

<script src="task4.js"></script>

</body>
</html>
