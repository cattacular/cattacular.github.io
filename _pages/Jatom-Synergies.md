---
layout: page
title: Jatom Synergies
permalink: /Jatom-Synergies/
---

## Bring Your Creative Dreams to Life

Jatom synergies mission is to help creative people meet their goals. We accomplish this by getting to know you and your work, then help to connect you with a curated selection of resources set you up for success. 

By help individuals or buisnesses leverage the amazing and often times free technology/information avalible today. We can increase your independance and reach, allowing you to acheive more than ever before.

we also will do a detailed analasis of workflow so each step from start to finish is crystal clear.

| **Package** |  **Price**  | **Description** |
| --- | --- | --- |
| Basic consultation | $30/h | We will go over your current tech use and help figure out what's working/not and where the best opportunities for growth are- or help you figure out how to leverage tech to meet your goals |
| Set up  | $75/h | Implementation sessions - We will schedule meetings based on need & scale of the project too implement the desired technology &/or workflows into your buisness |
| Ongoing Support | $250/y |  Quarterly check ins to help maintain effeciency & meet goals.|
| Program training | $50/h | Hands on tech support on how to use a specific tool |

<style>
  .contact-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
  }

  .contact-form label {
    display: block;
    margin-bottom: 5px;
  }

  .contact-form input,
  .contact-form textarea,
  .contact-form select {
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .contact-form textarea {
    height: 150px;
  }

  .contact-form .radio-group,
  .contact-form .checkbox-group {
    margin-bottom: 20px;
  }

  .contact-form .radio-group input,
  .contact-form .checkbox-group input {
    width: auto;
    margin-right: 10px;
  }

  .contact-form button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .contact-form button:hover {
    background-color: #0056b3;
  }
</style>

<div class="contact-form">
  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- Text Input -->
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name" required>

    <!-- Email Input -->
    <label for="email">Email Address:</label>
    <input type="email" id="email" name="email" required>

    <!-- Phone Number -->
    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone">

    <!-- Dropdown Selection -->
    <label for="interest">What are you interested in?</label>
    <select id="interest" name="interest">
      <option value="">Please select...</option>
      <option value="collaboration">Collaboration</option>
      <option value="hiring">Hiring</option>
      <option value="question">General Question</option>
      <option value="other">Other</option>
    </select>

    <!-- Radio Buttons -->
    <div class="radio-group">
      <label>Preferred Contact Method:</label>
      <input type="radio" id="contact-email" name="contact_preference" value="email">
      <label for="contact-email">Email</label>
      <input type="radio" id="contact-phone" name="contact_preference" value="phone">
      <label for="contact-phone">Phone</label>
    </div>

    <!-- Checkboxes -->
    <div class="checkbox-group">
      <label>Areas of Interest (select all that apply):</label>
      <div>
        <input type="checkbox" id="interest-web" name="interests[]" value="web">
        <label for="interest-web">Web Development</label>
      </div>
      <div>
        <input type="checkbox" id="interest-game" name="interests[]" value="game">
        <label for="interest-game">Game Design</label>
      </div>
      <div>
        <input type="checkbox" id="interest-art" name="interests[]" value="art">
        <label for="interest-art">Digital Art</label>
      </div>
    </div>

    <!-- Date Input -->
    <label for="preferred-date">Preferred Meeting Date:</label>
    <input type="date" id="preferred-date" name="preferred_date">

    <!-- Text Area for longer responses -->
    <label for="message">Your Message:</label>
    <textarea id="message" name="message" required></textarea>

    <button type="submit">Send</button>
  </form>
</div>
