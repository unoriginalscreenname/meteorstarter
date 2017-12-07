import {Authors} from "../authors";
import {authorsAll} from "./authors.queries";

if(Meteor.isServer) {
    Authors.expose({
        firewall(filters, options, userId) {
            filters.userId = userId;
        },
        // Allow reactive query-ing
        publication: true,
        // Allow static query-in
        method: true,
        // Unblock() the method/publication
        blocking: false,
        // The publication/method will not allow data fetching for more than 100 items.
        maxLimit: 1,
        // The publication/method will not allow a query with more than 3 levels deep.
        maxDepth: 3,
        // This will clean up filters, options.sort and options.fields and remove those fields from there.
        // It even removes it from deep filters with $or, $nin, etc
        // restrictedFields: ['services', 'secretField'],
        // Array of strings or a function that has userId
        // restrictLinks: ['link1', 'link2']
    })
    authorsAll.expose()
}
