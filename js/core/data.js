module.exports = {
  stories: [{
    id: "test",
    title: "Title Here",
    subtitle: "Subtitle",
    byline: "Mike del Castillo",
    category: "story",
    cover: "img/placeholder.png",
    content: [{
        type: "image",
        backgroundColor: "#FFF",
        textColor: "#000",
        img: "img/placeholder.png"
      },
      {
        type: "image",
        backgroundColor: "#FED5DA",
        textColor: "#AA1151",
        img: "img/girl.png"
      },
      {
        type: "text",
        backgroundColor: "#000",
        textColor: "red",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
    ],
  },{
    id: "another",
    title: "Love and Hate",
    subtitle: "Subtitle",
    byline: "Name Here",
    category: "story",
    cover: "img/placeholder.png",
    content: [{
        type: "image",
        backgroundColor: "#FFF",
        textColor: "#000",
        img: "img/placeholder.png"
      },
      {
        type: "image",
        backgroundColor: "#FFF",
        textColor: "red",
        img: "img/placeholder.png"
      },
      {
        type: "text",
        backgroundColor: "#FFF",
        textColor: "#000",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        type: "image-text",
        backgroundColor: "#FFF",
        textColor: "#000",
        img: "img/placeholder.png",
        text: "Here is some text while there's an image so you know this still works yay hahahah what lawl"
      },
    ],
  }, ],
};
