import Dexie from "dexie";

export class Entry {
  // Comment out the id field, to make it work again
  id?: number;
  text: string;

  constructor(text: string) {
    this.text = text;
  }
}

export class EntryDB extends Dexie {
  entries: Dexie.Table<Entry, number>;

  constructor() {
    super("EntryDB");
    this.version(1).stores({
      entries: "++id, text"
    });
    this.entries = this.table("entries");
    this.entries.mapToClass(Entry);
  }
}
