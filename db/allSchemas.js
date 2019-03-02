// /*
// Author: Terin Champion
// Team: 17
// Project: Pharmacy Ledger
// Realm database Schemas to track word distance from keyword.
// */


// import Realm from 'realm';
// import { all } from 'rsvp';


// export const MATCH_SCHEMA = 'Match'

// // Define Match
// export const matchSchema = {
//   name: MATCH_SCHEMA,
//   primaryKey: 'id',
//   properties: {
//     id: 'int', // primary key,
//     ndc: { type: 'string', indexed: true },
//     keyword: { type: 'string', indexed: true },
//     // width and height of the keyword
//     width: { type: 'double' },
//     height: { type: 'double' },
//     // X and Y location of the keyword
//     x: { type: 'double' },
//     y: { type: 'double' },
//     // Search for x and y range to find the findField associated with the keyword.
//     findX: { type: 'double' },
//     findY: { type: 'double' },
//     // Field that is found at this distance relative to the keyword.
//     findField: { type: 'string' }
//   }
// }

// // Database options
// const databaseOptions = {
//   path: 'pharmacyLedgerDb.realm',
//   schema: [matchSchema],
//   schemaVersion: 0
// }

// // functions for Match List
// export const insertNewMatch = newMatch => new Promise((resolve, reject) => {
//   Realm.open(databaseOptions).then(realm => {
//     realm.write(() => {
//       realm.create(MATCH_SCHEMA, newMatch)
//       resolve(newMatch)
//     })
//   }).catch((error) => reject(error))
// })
// export const updateMatch = matchList => new Promise((resolve, reject) => {
//   Realm.open(databaseOptions).then(realm => {
//     realm.write(() => {
//       let updatingMatchList = realm.objectForPrimaryKey(MATCH_SCHEMA, matchList.id)
//       updatingMatchList.keyword = matchList.keyword
//       resolve()
//     })
//   }).catch((error) => reject(error))
// })

// export const deleteMatch = matchListId => new Promise((resolve, reject) => {
//   Realm.open(databaseOptions).then(realm => {
//     realm.write(() => {
//       let deletingMatch = realm.objectForPrimaryKey(MATCH_SCHEMA, matchListId)
//       realm.delete(deletingMatch)
//       resolve()
//     })
//   }).catch((error) => reject(error))
// })

// export const deleteAllMatches = () => new Promise((resolve, reject) => {
//   Realm.open(databaseOptions).then(realm => {
//     realm.write(() => {
//       let allMatches = realm.opjects(MATCH_SCHEMA)
//       realm.delete(allMatches)
//       resolve()
//     })
//   }).catch((error) => reject(error))
// })

// export const queryAllMatches = () => new Promise((resolve, reject) => {
//   Realm.open(databaseOptions).then(realm => {
//     let allMatches = realm.objects(MATCH_SCHEMA)
//     resolve(allMatches)
//   }).catch((error) => reject(error))
// })


// export const queryNdcMatches = (ndc) => new Promise((resolve, reject) => {
//     Realm.open(databaseOptions).then(realm => {
//         let allMatches = realm.objects(MATCH_SCHEMA).filtered('ndc = $0', ndc);
//         resolve(allMatches);
//     }).catch((error) => reject(error));;
// })

// export default new Realm(databaseOptions);
