const Post = require("../models/post");

// Always start by deleting everything
Post.remove({}).then(function() {
  // Then create "seed" items
  Post.create({
    title: "50 Women-Led Startups That Are Crushing Tech",
    url:
      "https://www.forbes.com/sites/allysonkapin/2019/02/20/50-women-led-startups-who-are-crushing-tech/#49a480fe52b3",
    description:
      "Stephanie Lampkin, chief executive officer and founder of Blendoor, speaks during the 2019 Makers Conference in Dana Point, California, U.S., on Thursday, Feb. 7, 2019. The event gathers industry leading females for roundtable discussions to help inspire the women of tomorrow. "
  });

  Post.create({
    title: "Zuckerberg defends big tech, says Facebook should remain free",
    url:
      "https://www.nbcnews.com/tech/tech-news/zuckerberg-defends-big-tech-says-facebook-should-remain-free-n973566",
    description:
      "Facebook CEO Mark Zuckerberg said on Wednesday that Facebook is committed to remaining a free service and defended the company’s place as one of a handful of dominant tech companies. "
  });

  Post.create({
    title: "Software engineer happiness matters",
    url:
      "https://appdevelopermagazine.com/software-engineer-happiness-matters/",
    description:
      "Developing software isn't easy, and making developers and engineers happier and more productive can be a challenge for managers because of it. Use these ideas from Bart Copeland to make a happy developer."
  });
});
