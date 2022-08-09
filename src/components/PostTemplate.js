export default class PostTemplate {
  constructor(history, userName) {
    this.id = Math.random();
    this.content = history;
    this.userName = userName;
    this.publishedAt = new Date();
  }
}
