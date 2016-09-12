import { map as fpMap } from 'lodash/fp'

// Uncapped map allows us to get the index as the second method param
// which is useful when react needs a 'key' value passed to a component
export const map = fpMap.convert( { 'cap': false } )
