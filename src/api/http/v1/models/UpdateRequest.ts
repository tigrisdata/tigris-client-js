/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdateRequestOptions } from './UpdateRequestOptions';

export type UpdateRequest = {
    /**
     * Fields contains set of fields with the values which need to be updated. Should be proper JSON object.
     */
    fields?: Record<string, any>;
    /**
     * Update documents which matching specified filter. A filter can simply be key, value where key is the field name and value would be the value for this field. Or a filter can be logical where two or more fields can be logically joined using $or and $and. A few examples of filter: <li> To update a user document where the id has a value 1: ```{"id": 1 }``` <li> To update all the user documents where the key "id" has a value 1 or 2 or 3: `{"$or": [{"id": 1}, {"id": 2}, {"id": 3}]}`
     */
    filter?: Record<string, any>;
    options?: UpdateRequestOptions;
    /**
     * Optionally specify a database branch name to perform operation on
     */
    branch?: string;
};

