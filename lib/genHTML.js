const genHTML = ({ user, location, github, linkedin, color }) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            text-align: center;
            font-family: "Comic Sans MS";
            background-color: ${color}; 
        }
    </style>
</head>
<body>
    <h1>${user}'s profile</h1>
    <h2>Location: ${location}</h2>
    <h3><a href="https://github.com/${github}" target="_blank">github</a></h3>
    <h3><a href="https://www.linkedin.com/in/${linkedin}/" target="_blank">linkedin</a></h3>
</body>
</html>
`;
};

module.exports = genHTML;
