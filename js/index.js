$(document).ready(function() {
  let story = `Steven Superhalk had always hated derelict Plymouth with its melodic, mashed mountains. It was a place where he felt anxious.

  He was a thoughtless, patient, whiskey drinker with brunette eyelashes and slimy lips. His friends saw him as a melodic, mashed muppet. Once, he had even jumped into a river and saved a raw kitten. That's the sort of man he was.

  Steven walked over to the window and reflected on his snooty surroundings. The drizzle rained like boating dogs.

  Then he saw something in the distance, or rather someone. It was the figure of Rhiannon Wishmonger. Rhiannon was a brutal gamer with grubby eyelashes and wide lips.

  Steven gulped. He was not prepared for Rhiannon.

  As Steven stepped outside and Rhiannon came closer, he could see the helpful glint in her eye.

  Rhiannon gazed with the affection of 3601 energetic thoughtful toads. She said, in hushed tones, "I love you and I want a phone number."

  Steven looked back, even more jumpy and still fingering the ripped torch. "Rhiannon, I'm in love with you," he replied.

  They looked at each other with puzzled feelings, like two green, gleaming goldfish hopping at a very special Valentine's meal, which had indie music playing in the background and two popular uncles jogging to the beat.

  Suddenly, Rhiannon lunged forward and tried to punch Steven in the face. Quickly, Steven grabbed the ripped torch and brought it down on Rhiannon's skull.

  Rhiannon's grubby eyelashes trembled and her wide lips wobbled. She looked fuzzy, her emotions raw like a knobbly, kind knife.

  Then she let out an agonising groan and collapsed onto the ground. Moments later Rhiannon Wishmonger was dead.

  Steven Superhalk went back inside and made himself a nice glass of whiskey.

  THE END.`;

    let arr = story.split("\n");
    $('#typed').typed({
      strings: arr,
      typeSpeed: 15,
      backSpeed: 20,
      backDelay: 2000,
      startDelay: 1000,
      loop: false,
      loopCount: Infinity,
      onComplete: function(self) {
        prettyLog('onComplete ' + self)
      }
    })
})
