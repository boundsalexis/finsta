# finsta
finsta for your fake insta needs

goals: 
1. use redux
2. use aws
3. recreate instagram layout
4. password encrption
5. user authentication
6. allow user to change their name, allow user to change their passsword
7. full crud cycle of posts
8. sticky nav
9. sticky footer

sprinkles
_________
notifications liked by n such



models:

a user has many posts
post has many comments => comments belong to posts and have reference to user
post has many likes
post has time posted

a user has many "liked posts" => refference to post in dn


maybe this is cherry on top
user has many followers
users has many following




feed shows all posts, by time

when user posts
upload photo to aws
add to aws link to db
update feed


sprinkles: search page/explore page