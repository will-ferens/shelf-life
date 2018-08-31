import { readStateActions } from '../../constants/constants_book'

export const filterReadState = readState => ({
    type: readStateActions.READ_STATE,
    readState
})