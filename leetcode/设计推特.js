/*
*设计一个简化版的推特(Twitter)，可以让用户实现发送推文，关注/取消关注其他用户，能够看见关注人（包括自己）的最近十条推文。你的设计需要支持以下的几个功能：

postTweet(userId, tweetId): 创建一条新的推文
getNewsFeed(userId): 检索最近的十条推文。每个推文都必须是由此用户关注的人或者是用户自己发出的。推文必须按照时间顺序由最近的开始排序。
follow(followerId, followeeId): 关注一个用户
unfollow(followerId, followeeId): 取消关注一个用户
*
* */
/*
* 思路：
* 用户下存储关注的人、推特hash表，与发推特的时间（用于最后合并排序，返回最后发布的10个）
* 方法二是优化：节省了存储空间，但只能用于小批量数据
* */

var Twitter = function() {
    this.userId = new Object()
};
let index = 0
Twitter.prototype.postTweet = function(userId, tweetId) {

    if(this.userId[userId] === undefined){
        this.userId[userId]  = {
            follow:new Set(),
            tweet:{},
            time:[]
        }
    }
    this.userId[userId].time.unshift(index)
    this.userId[userId].tweet[''+index] = tweetId
    index ++
};
Twitter.prototype.getNewsFeed = function(userId) {
    if(this.userId[userId] === undefined){
        this.userId[userId]  = {
            follow:new Set(),
            tweet:{},
            time:[]
        }
    }
    let time = [...this.userId[userId].time]
    let tweet = this.userId[userId].tweet
    if(this.userId[userId].follow.size > 0){
        for (let key of this.userId[userId].follow) {
            if(key !== userId){
                time.push(...this.userId[key].time)
                Object.assign(tweet,this.userId[key].tweet)
            }
        }
        time.sort((a,b)=>b - a)
    }
    let res = []
    for(let i = 0;i < 10 && i < time.length;i ++){
        let id = tweet[''+time[i]]
        res.push(id)
    }
    return res
};
Twitter.prototype.follow = function(followerId, followeeId) {
    if(this.userId[followerId] === undefined){
        this.userId[followerId]  = {
            follow:new Set(),
            tweet:{},
            time:[]
        }
    }
    if(this.userId[followeeId] === undefined){
        this.userId[followeeId]  = {
            follow:new Set(),
            tweet:{},
            time:[]
        }
    }
    if(!this.userId[followerId].follow.has(followeeId)){
        this.userId[followerId].follow.add(followeeId)
    }
};
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.userId[followerId] === undefined){
        this.userId[followerId]  = {
            follow:new Set(),
            tweet:{},
            time:[]
        }
    }
    if(this.userId[followeeId] === undefined){
        this.userId[followeeId]  = {
            follow:new Set(),
            tweet:{},
            time:[]
        }
    }
    if(this.userId[followerId].follow.has(followeeId)){
        this.userId[followerId].follow.delete(followeeId)
    }
};
let twitter = new Twitter();
twitter.postTweet(1, 5);
console.log(twitter.getNewsFeed(1));
twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1));
twitter.unfollow(1, 2);
console.log(twitter.getNewsFeed(1));
// console.log(twitter);

/*
//方法二：维护一个推特表，关联发布人id
//获取的时候，判断该推特是否属于该用户发布的或者其关注的人发布的
var Twitter = function() {
    this.userId = new Object()
    this.tweet = []
    this.tweetId = []
};
Twitter.prototype.postTweet = function(userId, tweetId) {
    if(this.userId[userId] === undefined){
        this.userId[userId]  = {
            follow:new Set(),
        }
    }
    this.tweet.unshift(tweetId)
    this.tweetId.unshift(userId)
};
Twitter.prototype.getNewsFeed = function(userId) {
    if(this.userId[userId] === undefined){
        this.userId[userId]  = {
            follow:new Set(),
        }
    }
    let res = []
    for(let i = 0;i < this.tweet.length;i ++){
        if(res.length < 10){
            if (userId === this.tweetId[i] || this.userId[userId].follow.has(this.tweetId[i])) {
                res.push(this.tweet[i])
            }
        }

    }
    return res
};
Twitter.prototype.follow = function(followerId, followeeId) {
    if(this.userId[followerId] === undefined){
        this.userId[followerId]  = {
            follow:new Set(),
        }
    }
    if(this.userId[followeeId] === undefined){
        this.userId[followeeId]  = {
            follow:new Set(),
        }
    }
    if(!this.userId[followerId].follow.has(followeeId)){
        this.userId[followerId].follow.add(followeeId)
    }
};
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.userId[followerId] === undefined){
        this.userId[followerId]  = {
            follow:new Set()
        }
    }
    if(this.userId[followeeId] === undefined){
        this.userId[followeeId]  = {
            follow:new Set()
        }
    }
    if(this.userId[followerId].follow.has(followeeId)){
        this.userId[followerId].follow.delete(followeeId)
    }
};*/
