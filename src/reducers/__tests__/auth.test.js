import authReducer from '../auth'
import * as authActions from '../../actions/auth'

describe( 'auth', () => {
  describe( 'register', () => {
    it( 'succeeded - and set uid, displayName, photoURL and email', () => {
      const mockResult = {
        uid: 'ABC123',
        displayName: 'JJ',
        photoURL: 'photo.png',
        email: 'jj@example.com',
      }
      const registerSucceededAction = authActions.registerSucceeded( mockResult )
      const state = authReducer( undefined, registerSucceededAction )
      expect( state.uid ).toBe( 'ABC123' )
      expect( state.displayName ).toBe( 'JJ' )
      expect( state.photoURL ).toBe( 'photo.png' )
      expect( state.email ).toBe( 'jj@example.com' )
    } )
    it( 'failed - and set the email and error message', () => {
      const registerFailedAction = authActions.registerFailed( 'jj@example.com', 'Ooops' )
      const state = authReducer( undefined, registerFailedAction )
      expect( state.uid ).toBe( null )
      expect( state.displayName ).toBe( null )
      expect( state.photoURL ).toBe( null )
      expect( state.email ).toBe( 'jj@example.com' )
      expect( state.registrationErrorMessages.length ).toBe( 1 )
      expect( state.registrationErrorMessages[0] ).toBe( 'Ooops' )
    } )
  } )
} )
