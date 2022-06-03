import { matchJobOfferToUser } from './userMatch';
import { mockUserPref1, mockJobOffer1, mockJobOffer2,mockJobOffer3, mockJobOffer4, mockJobOffer5 } from './mocks'

describe('matchJobOfferToUser',()=>{
  it('expect to match in 100%', () => {
    const matchResult = matchJobOfferToUser(mockUserPref1, mockJobOffer1);
    expect(matchResult).toBe("100.00");
  })
  it('expect to match in 90%', () => {
    const matchResult = matchJobOfferToUser(mockUserPref1, mockJobOffer2);
    expect(matchResult).toBe("90.00");
  })
  it('expect to match in 80%', () => {
    const matchResult = matchJobOfferToUser(mockUserPref1, mockJobOffer3);
    expect(matchResult).toBe("80.00");
  })
  it('expect to match in 50%', () => {
    const matchResult = matchJobOfferToUser(mockUserPref1, mockJobOffer4);
    expect(matchResult).toBe("50.00");
  })
  it('expect to match in 0%', () => {
    const matchResult = matchJobOfferToUser(mockUserPref1, mockJobOffer5);
    expect(matchResult).toBe("0.00");
  })
})