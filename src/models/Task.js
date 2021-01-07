class Task {
    constructor(
      text = '',
      id = null,
      createdAt = null,
      isCompleted = null,
    ) {
      this._id = id;
      this.text = text;
      this._createdAt = createdAt || new Date();
      this.isCompleted = isCompleted;
    }
  
    get id() {
      return this._id;
    }
    set id(id) {
      return this._id = id;
    }
  
    get createdAt() {
      return this._createdAt;
    }
    set createdAt(createdAt) {
      return this._createdAt = createdAt
    }
}