let count = 0;
let tweets = [];
var interval = setInterval(app, 500);

function app() {
  tweets = document.querySelectorAll(`[data-testid="tweetText"]`);

  if (tweets.length === 0 && count < 5) {
    count++;
    return;
  }

  clearInterval(interval);

  const renderFire = () => {
    let fire = "";
    for (let i = 0; i < count; i++) fire += "🔥";
    return fire;
  };

  console.log(
    `%cTwitter supercharger installed ${renderFire()}`,
    "background: #1B9DF0; color: #000;  font-size: 1rem; padding: 4px; border-radius: 4px"
  );

  tweets.forEach((tweet) => {
    const parsedString = tweet.innerHTML.replace(/<\/?span[^>]*>/g, "");
    const textarea = document.createElement("textarea");
    textarea.innerHTML = parsedString;
    tweet.innerHTML = marked.parse(textarea.value);
  });

  hljs.highlightAll();
}
