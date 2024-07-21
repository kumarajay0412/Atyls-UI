export const SIGN_IN_FIELD_NAMES = {
  EMAIL: "email",
  PASSWORD: "password",
  USERNAME: "username",
};

export const DIALOGS = {
  SIGN_IN_MODAL: "sign-in-modal",
  SIGN_UP_MODAL: "sign-up-modal",
};

export const DUMMY_POSTS = [
  {
    id: 1,
    user: {
      name: "Theresa Webb",
      profile_image: "/profile_image_1.png",
    },
    edited: false,
    emoji: "/hi_emoji.png",
    commentCount: 24,
    timeStamp: "5mins ago",
    comments: [
      {
        id: "comment1",
        user: {
          name: "John Doe",
          profile_image: "/profile_image_john.png",
        },
        comment_text: "Great post! I completely agree with your points.",
      },
    ],
    post_text:
      "Just finished a great book on productivity. Highly recommend it to everyone!",
  },
  {
    id: 2,
    user: {
      name: "Marvin McKinney",
      profile_image: "/profile_image_2.png",
    },
    emoji: "/depressed_emoji.png",
    commentCount: 15,
    edited: true,
    timeStamp: "2hrs ago",
    comments: [
      {
        id: "comment2",
        user: {
          name: "Sarah Smith",
          profile_image: "/profile_image_sarah.png",
        },
        comment_text: "Congratulations! That's amazing news!",
      },
    ],
    post_text:
      "Just got promoted at work! So excited for this new chapter in my career.",
  },
  {
    id: 3,
    user: {
      name: "Elena Rodriguez",
      profile_image: "https://avatar.vercel.sh/rauchgdd",
    },
    emoji: "/hi_emoji.png",
    commentCount: 7,
    edited: false,
    timeStamp: "1day ago",
    comments: [
      {
        id: "comment3",
        user: {
          name: "Mike Johnson",
          profile_image: "/profile_image_mike.png",
        },
        comment_text: "I've been wondering about this too. Let's discuss!",
      },
    ],
    post_text:
      "What are your thoughts on the future of remote work? Will it become the new norm?",
  },
  {
    id: 4,
    user: {
      name: "Alex Chen",
      profile_image: "https://avatar.vercel.sh/raucdhgdd",
    },
    emoji: "/hi_emoji.png",
    commentCount: 32,
    edited: false,
    timeStamp: "3hrs ago",
    comments: [
      {
        id: "comment4",
        user: {
          name: "Lisa Taylor",
          profile_image: "/profile_image_lisa.png",
        },
        comment_text: "Wow, that looks incredible! Which camera did you use?",
      },
    ],
    post_text:
      "Check out this amazing sunset I captured last night! Nature never fails to impress.",
  },
  {
    id: 5,
    user: {
      name: "Samantha Lee",
      profile_image: "https://avatar.vercel.sh/raeucdhgdd",
    },
    emoji: "/hi_emoji.png",
    commentCount: 18,
    edited: true,
    timeStamp: "4hrs ago",
    comments: [
      {
        id: "comment5",
        user: {
          name: "David Brown",
          profile_image: "/profile_image_david.png",
        },
        comment_text: "Sorry to hear that. Hope you feel better soon!",
      },
    ],
    post_text:
      "Feeling under the weather today. Any home remedies for a bad cold?",
  },
  {
    id: 6,
    user: {
      name: "Robert Johnson",
      profile_image: "https://avatar.vercel.sh/rauecdhgdsd",
    },
    emoji: "/hi_emoji.png",
    commentCount: 41,
    edited: false,
    timeStamp: "2days ago",
    comments: [
      {
        id: "comment6",
        user: {
          name: "Emma Wilson",
          profile_image: "/profile_image_emma.png",
        },
        comment_text: "Haha, that's hilarious! Thanks for sharing.",
      },
    ],
    post_text:
      "Just heard the funniest joke today. Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: 7,
    user: {
      name: "Olivia Martinez",
      profile_image: "https://avatar.vercel.sh/raucdhgdddwd",
    },
    emoji: "/hi_emoji.png",
    commentCount: 29,
    edited: false,
    timeStamp: "6hrs ago",
    comments: [
      {
        id: "comment7",
        user: {
          name: "Chris Anderson",
          profile_image: "/profile_image_chris.png",
        },
        comment_text: "That's fantastic! Your hard work paid off.",
      },
    ],
    post_text:
      "Finally completed my first marathon! It was tough, but so rewarding.",
  },
  {
    id: 8,
    user: {
      name: "Daniel Kim",
      profile_image: "https://avatar.vercel.sh/raucdhddgdddwd",
    },
    emoji: "/hi_emoji.png",
    commentCount: 12,
    edited: true,
    timeStamp: "1day ago",
    comments: [
      {
        id: "comment8",
        user: {
          name: "Rachel Green",
          profile_image: "/profile_image_rachel.png",
        },
        comment_text:
          "I'd recommend 'The Alchemist' by Paulo Coelho. It's life-changing!",
      },
    ],
    post_text:
      "Looking for book recommendations. What's the best novel you've read recently?",
  },
  {
    id: 9,
    user: {
      name: "Sophie Turner",
      profile_image: "https://avatar.vercel.sh/rasucdhddgdddwd",
    },
    emoji: "/hi_emoji.png",
    commentCount: 37,
    edited: false,
    timeStamp: "5hrs ago",
    comments: [
      {
        id: "comment9",
        user: {
          name: "Tom Harris",
          profile_image: "/profile_image_tom.png",
        },
        comment_text: "That's amazing! Enjoy your trip and stay safe.",
      },
    ],
    post_text:
      "Just booked my dream vacation to Japan! Any must-visit places or travel tips?",
  },
  {
    id: 10,
    user: {
      name: "Michael Thompson",
      profile_image: "https://avatar.vercel.sh/rasucdhddgdddwd",
    },
    emoji: "/hi_emoji.png",
    commentCount: 22,
    edited: false,
    timeStamp: "3days ago",
    comments: [
      {
        id: "comment10",
        user: {
          name: "Emily Clark",
          profile_image: "/profile_image_emily.png",
        },
        comment_text:
          "I've been trying meditation. It really helps clear my mind.",
      },
    ],
    post_text:
      "What's your go-to method for reducing stress and staying focused?",
  },
];
