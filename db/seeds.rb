guest_user = User.create(email: 'guest_user@example.com', password: 'password')

# boards

board1 = guest_user.boards.create(title: 'Michael')
board2 = guest_user.boards.create(title: 'Lindsay')
board3 = guest_user.boards.create(title: 'Gob')
board4 = guest_user.boards.create(title: 'Lucille')

# lists

list11 = board1.lists.create(title: 'Company Matters')
list12 = board1.lists.create(title: 'Family Matters')
list13 = board1.lists.create(title: 'Ann')
list14 = board1.lists.create(title: 'Father-Son Time')

list21 = board2.lists.create(title: 'Marital Issues')
list22 = board2.lists.create(title: 'Shopping')
list23 = board2.lists.create(title: 'Insecurities')

list31 = board3.lists.create(title: 'Huge Mistakes')
list32 = board3.lists.create(title: 'Illusions')
list33 = board3.lists.create(title: 'Forgotten Moments')

list41 = board4.lists.create(title: 'Alcohol/Attitude')
list42 = board4.lists.create(title: 'Buster')
list43 = board4.lists.create(title: 'Bad Parenting')
list44 = board4.lists.create(title: 'Things we can\'t un-hear')

# cards

# michael
company_matters_1 = list11.cards.create(title: 'Formal Resignation', description: 'I quit.')
company_matters_2 = list11.cards.create(title: 'When Gob took over', description: 'How much damage could he possibly cause?')
company_matters_3 = list11.cards.create(title: 'Informal Resignation', description: 'And good luck trying to find someone to run the business, by the way. G.O.B., instead of always coming to me looking for money, saying, "I\'ve made a huge mistake," you can bail yourself out next time.')
family_matters_1 = list12.cards.create(title: 'On Buster', description: 'Buster? You mean the one who thought the blue on the map was land?')
family_matters_2 = list12.cards.create(title: 'On Lucille', description: 'You seem more villainous than usual, Mom; are you sober?')
family_matters_3 = list12.cards.create(title: 'Tracking George', description: 'This all makes sense now. Dad\'s in Reno, Kitty\'s in Reno, Dad\'s in Kitty, and Dad\'s a Blue Man.')
ann_1 = list13.cards.create(title: 'Mexico', description: 'George-Michael, listen, why don\'t you and Plant just wait in the stair car.')
ann_2 = list13.cards.create(title: 'Come again?', description: 'It\'s as Ann as the nose on Plain\'s face.')
ann_3 = list13.cards.create(title: 'Important Questions', description: 'Her?')
father_son_1 = list14.cards.create(title: 'Camping', description: 'I\'m taking my son to the cabin and there\'s nothing you can say to convince me that you\'re not my dad.')
father_son_2 = list14.cards.create(title: 'Bad Suggestion', description: 'Hey, maybe you could pop a tent outside with your cousin Maeby, it\'d be a good chance to rub off on her.')

# lindsay

marital_issues_1 = list21.cards.create(title: 'What she can\'t have', description: 'I can\'t believe Tobias dumped me for that whore Kitty. Do you think he would leave this? And these?')
marital_issues_2 = list21.cards.create(title: 'Junk', description: 'I don\'t know why, but you can take your junk and get out.')
marital_issues_3 = list21.cards.create(title: 'Were you?', description: 'For your information, I do! Tobias and I used to be huge advocates for change. I guess that\'s why I was so attracted to him. He used to believe in things. We both did.')
shopping_1 = list22.cards.create(title: 'Taste', description: 'Mother, not all homosexuals are flamboyant... and... oh my god, I have the exact same blouse!')
shopping_2 = list22.cards.create(title: 'Shoplifting', description: 'Michael, it was shoplifting, and I\'m white.')
shopping_3 = list22.cards.create(title: 'Maeby\'s revenge', description: 'Where did you get that broach?')
insecurities_1 = list23.cards.create(title: 'On Bob Loblaw', description: 'Maybe if I can get Hope this crown, her father might just want to crown me, if you catch my drift.')
insecurities_2 = list23.cards.create(title: 'Losing it', description: 'I was trying to be sexy. It just got away from me.')
insecurities_3 = list23.cards.create(title: 'Visiting Prison', description: 'And Dad finally paid attentionto my intellect.')

# gob

huge_mistakes_1 = list31.cards.create(title: 'Really', description: 'I\'ve never admitted to a mistake. What would I have made a mistake about?')
huge_mistakes_2 = list31.cards.create(title: 'What happens in Reno', description: 'I\'ve made a huge tiny mistake.')
huge_mistakes_3 = list31.cards.create(title: 'Prison Break', description: 'No, I can\'t pass this key without privacy!')
illusions_1 = list32.cards.create(title: 'Get it right', description: 'Illusion, Michael. A trick is something a whore does for money... [sees children watching his magic] ...or cocaine!')
illusions_2 = list32.cards.create(title: 'Say that to them in Spanish', description: 'No shackles can hold these hands!')
illusions_3 = list32.cards.create(title: 'Disaster', description: 'I did it! I sunk the yacht!')
forgotten_moments_1 = list33.cards.create(title: 'Origins of Steve', description: 'Plus, that one is religious. It gets pregnant, it stays pregnant. I know, I dated a chick like that once in high school. Wait... no, I didn\'t.')
forgotten_moments_2 = list33.cards.create(title: 'I am your father', description: 'Steve Holt: "I won\'t forget this...Dad." \n Gob: "I will...[takes pill]...I will"')

# lucille

alcohol_1 = list41.cards.create(title: 'Breakfast', description: 'Lucille: Get me a vodka rocks. \n Michael: Mom, it\'s breakfast. \n Lucille: And a piece of toast.')
alcohol_2 = list41.cards.create(title: 'Klimpy\'s', description: 'I don\'t understand the question, and I won\'t respond to it.')
buster_1 = list42.cards.create(title: 'Scholarly Pursuit', description: 'Suddenly playing with yourself is a scholarly pursuit...')
buster_2 = list42.cards.create(title: 'Candy', description: 'Oh, hello, Buster. Here\'s a candy bar. No, I\'m withholding it. Look at me, "getting off."')
buster_3 = list42.cards.create(title: 'Juice', description: 'No juice for you. It just makes you more awful.')
bad_parenting_1 = list43.cards.create(title: 'Favorites', description: 'I love all my children equally. [earlier: "I don\'t care for Gob..."]')
bad_parenting_2 = list43.cards.create(title: 'That udder\'s been dry for a while', description: 'I don\'t have the milk of mother\'s kindness in me anymore.')
bad_parenting_3 = list43.cards.create(title: 'Lindsay chops', description: 'Are those for Lindsay? Because she\'s not afraid to eat in front of me anymore - those are the whites only, yes?')
bad_parenting_4 = list43.cards.create(title: 'Motherboy', description: 'I guess you\'ll just have to decide which Lucille you want to spend your nights with.')
unhear_1 = list44.cards.create(title: 'The Cabin', description: 'How am I supposed to find someone willing to go into that musty old claptrap?')
unhear_2 = list44.cards.create(title: 'Oscar', description: 'Mama horny, Michael.')
