* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #000;
    color: #fff;
    font-family: 'Poppins', sans-serif;
}

.header {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(images/header-image.png);
    background-size: cover;
    background-position: center;
    padding: 10px 8%;
    position: relative;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
}

.logo {
    width: 150px;
    cursor: pointer;
}

nav button {
    border: 0;
    outline: 0;
    background: #db0001;
    color: #fff;
    padding: 7px 20px;
    font-size: 12px;
    border-radius: 4px;
    margin-left: 10px;
    cursor: pointer;
}

.language-btn {
    display: inline-flex;
    align-items: center;
    background: transparent;
    border: 1px solid #fff;
    padding: 7px 10px;
}

.language-btn img {
    width: 10px;
    margin-left: 10px;
}

.header-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    margin-top: 100px;
}

.header-content h1 {
    font-size: 60px;
    line-height: 70px;
    font-weight: 600;
    max-width: 650px;
}

.header-content h3 {
    font-weight: 400;
    margin-bottom: 20px;
}

.email-signup {
    background: #fff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-top: 30px;
    overflow: hidden;
}

.email-signup input {
    flex: 1;
    border: 0;
    outline: 0;
    margin-left: 20px;
}

.email-signup button {
    background: #db0001;
    border: 0;
    outline: 0;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    padding: 15px 30px;
}

.features {
    padding: 50px 12%;
    font-size: 22px;
}

.row {
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px 0px;
}

.text-col,
.img-col {
    flex-basis: 50%;
    margin-bottom: 20px;
}

.img-col img {
    display: block;
    width: 90%;
    margin: auto;
}

.features h2 {
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 20px;
}

.reverse {
    flex-direction: row-reverse;
}

.faq {
    padding: 10px 12%;
    text-align: center;
    font-size: 18px;
}

.faq h2 {
    font-weight: 500;
    font-size: 40px;
}

.accordion {
    margin: 60px auto;
    width: 100%;
    max-width: 750px;
}

.accordion li {
    list-style: none;
    width: 100%;
    padding: 5px;
}

.accordion li label {
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 18px;
    font-weight: 500;
    background: #303030;
    margin-bottom: 2px;
    cursor: pointer;
    position: relative;
}

.accordion li label::after {
    content: '+';
    font-size: 34px;
    position: absolute;
    right: 20px;
    transition: transform 0.5s;
}

input[type="radio"] {
    display: none;
}

.accordion .content {
    background: #303030;
    text-align: left;
    padding: 0 20px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s, padding 0.5s;
}

.accordion input[type="radio"]:checked + label + .content {
    max-height: 600px;
    padding: 30px 20px;
}

.accordion input[type="radio"]:checked + label::after {
    transform: rotate(135deg);
}
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Netflix Website</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="header">
    <nav>
        <img src="images/logo.png" class="logo">
        <div>
            <form action="/action_page.php">
                <select name="language" id="language">
                    <option value="english">English</option>
                    <option value="telugu">Telugu</option>
                    <option value="hindi">Hindi</option>
                    <option value="tamil">Tamil</option>
                </select>
                <button>Sign IN <img src=" "></button>
            </form>
        </div>
    </nav>
    <div class="header-content">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form class="email-signup">
            <input type="email" placeholder="Email-address" required>
            <button type="submit">Get Started</button>
        </form>
    </div>
</div>

<div class="features">
    <div class="row">
        <div class="text-col">
            <h2>Enjoy on your TV.</h2>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple Tv and more.</p>
        </div>
        <div class="img-col">
            <img src="images/feature-1.png">
        </div>
    </div>
    <div class="row reverse">
        <div class="text-col">
            <h2>Download your shows to watch offline.</h2>
            <p>Save your favourites easily and always have something to watch.</p>
        </div>
        <div class="img-col">
            <img src="images/feature-2.png">
        </div>
    </div>
    <div class="row">
        <div class="text-col">
            <h2>Watch everywhere.</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div class="img-col">
            <img src="images/feature-3.png">
        </div>
    </div>
    <div class="row reverse">
        <div class="text-col">
            <h2>Create profiles for children.</h2>
            <p>Send children on adventures with their favourites characters in a space made just for them-free with your membership</p>
        </div>
        <div class="img-col">
            <img src="images/feature-4.png">
        </div>
    </div>
</div>

<div class="faq">
    <h2>Frequently Asked Questions</h2>
    <ul class="accordion">
        <li>
            <input type="radio" name="accordion" id="question1">
            <label for="question1">What is Netflix?</label>
            <div class="content">
                <p>Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
            </div>
        </li>
        <li>
            <input type="radio" name="accordion" id="question2">
            <label for="question2">How much does Netflix cost?</label>
            <div class="content">
                <p>Netflix offers several membership plans to suit your needs. Your plan will determine how many people can stream Netflix content at once, and whether you can view in Standard Definition (SD), High Definition (HD), or Ultra High Definition (UHD). You can find the latest pricing information on the Netflix website.</p>
            </div>
        </li>
        <li>
            <input type="radio" name="accordion" id="question3">
            <label for="question3">Where can I watch Netflix?</label>
            <div class="content">
                <p>You can watch Netflix on your TV, mobile device, tablet, laptop, desktop, streaming media player, gaming console, and more. Visit the Netflix website or download the Netflix app to start streaming.</p>
            </div>
        </li>
        <li>
            <input type="radio" name="accordion" id="question4">
            <label for="question4">How do I cancel Netflix?</label>
            <div class="content">
                <p>You can cancel your Netflix subscription at any time online. Simply log in to your account, go to the Account page, and click on the Cancel Membership button.</p>
            </div>
        </li>
        <li>
            <input type="radio" name="accordion" id="question5">
            <label for="question5">What can I watch on Netflix?</label>
            <div class="content">
                <p>Netflix offers a wide range of TV shows, movies, documentaries, anime, and more. From original series to popular movies, there's something for everyone on Netflix.</p>
            </div>
        </li>
        <li>
            <input type="radio" name="accordion" id="question6">
            <label for="question6">Is Netflix good for kids?</label>
            <div class="content">
                <p>Netflix offers a dedicated Kids experience with a wide selection of family-friendly TV shows and movies suitable for children of all ages. Parents can set up parental controls to restrict access to certain content.</p>
            </div>
        </li>
    </ul>
</div>

<script src="script.js"></script>
</body>
</html>
const accordionItems = document.querySelectorAll('.accordion li');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        const content = item.querySelector('.content');
        const isOpen = content.style.maxHeight;

        accordionItems.forEach(item => {
            const itemContent = item.querySelector('.content');
            itemContent.style.maxHeight = null;
        });

        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});
