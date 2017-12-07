// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';
import { linksAll } from './db/links.queries'

Meteor.methods({
  'links.insert'({title}) {
    check(title, String);

    let _id = Links.insert({
      title:'testing link',
      createdAt: new Date(),
      description:"test description"
    });

  },
  'links.remove'({_id}) {
    check(_id, String);

    return Links.remove(_id);
  },
  linksQueryGetAll() {
      const query = linksAll.clone()
      return query.fetch();
  }
});
