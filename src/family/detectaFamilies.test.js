import {detectaFamilies} from './detectaFamilies';

describe('Given a set of custodies detect families', () => {
      it('Detects a family with two parents', () => {
        expect(
            detectaFamilies(
                {
                  '12a030f5-31f1-43d0-828b-168eb55471db': {
                    primer: '7307eb57-41ef-40f5-861a-1dcc72ac3f1e',
                    segon: '2844f3a8-a334-4baf-8f4a-762d3b7b1543'
                  }
                })
        ).toEqual(
            {
              '2844f3a8-a334-4baf-8f4a-762d3b7b15437307eb57-41ef-40f5-861a-1dcc72ac3f1e': {
                'menors': ['12a030f5-31f1-43d0-828b-168eb55471db'],
                'sustentadors': ['2844f3a8-a334-4baf-8f4a-762d3b7b1543', '7307eb57-41ef-40f5-861a-1dcc72ac3f1e'],
                'monoparental': false
              }
            }
        );
      });

      it('Detects one family from multiple custodies', () => {
        expect(
            detectaFamilies(
                {
                  '12a030f5-31f1-43d0-828b-168eb55471db': {
                    primer: '7307eb57-41ef-40f5-861a-1dcc72ac3f1e',
                    segon: '2844f3a8-a334-4baf-8f4a-762d3b7b1543'
                  },
                  'fc9c8238-7992-4475-8680-e56942ca7c3d': {
                    primer: '7307eb57-41ef-40f5-861a-1dcc72ac3f1e',
                    segon: '2844f3a8-a334-4baf-8f4a-762d3b7b1543'
                  }
                })
        ).toEqual(
            {
              '2844f3a8-a334-4baf-8f4a-762d3b7b15437307eb57-41ef-40f5-861a-1dcc72ac3f1e': {
                'menors': ['12a030f5-31f1-43d0-828b-168eb55471db', 'fc9c8238-7992-4475-8680-e56942ca7c3d'],
                'sustentadors': ['2844f3a8-a334-4baf-8f4a-762d3b7b1543', '7307eb57-41ef-40f5-861a-1dcc72ac3f1e'],
                'monoparental': false
              }
            }
        );
      });

      it('Detects two families from multiple custodies', () => {
        expect(
            detectaFamilies(
                {
                  '12a030f5-31f1-43d0-828b-168eb55471db': {
                    primer: '7307eb57-41ef-40f5-861a-1dcc72ac3f1e',
                    segon: '2844f3a8-a334-4baf-8f4a-762d3b7b1543'
                  },
                  '6f596a70-c277-4327-9df0-ecbd996ee8c4': {
                    primer: '6e52d617-0920-49eb-a4b6-d8fe070d3ee9',
                    segon: '2d04dda7-c4a3-43df-ba65-ada23faa1bf0'
                  }
                })
        ).toEqual(
            {
              '2844f3a8-a334-4baf-8f4a-762d3b7b15437307eb57-41ef-40f5-861a-1dcc72ac3f1e': {
                'menors': ['12a030f5-31f1-43d0-828b-168eb55471db'],
                'sustentadors': ['2844f3a8-a334-4baf-8f4a-762d3b7b1543', '7307eb57-41ef-40f5-861a-1dcc72ac3f1e'],
                'monoparental': false
              },
              '2d04dda7-c4a3-43df-ba65-ada23faa1bf06e52d617-0920-49eb-a4b6-d8fe070d3ee9': {
                'menors': ['6f596a70-c277-4327-9df0-ecbd996ee8c4'],
                'sustentadors': ['2d04dda7-c4a3-43df-ba65-ada23faa1bf0', '6e52d617-0920-49eb-a4b6-d8fe070d3ee9'],
                'monoparental': false
              }
            }
        );
      });

      it('Detects a monoparental family when there is only one parent', () => {
        expect(
            detectaFamilies(
                {
                  '12a030f5-31f1-43d0-828b-168eb55471db': {
                    primer: '7307eb57-41ef-40f5-861a-1dcc72ac3f1e',
                    segon: 'ningu_mes'
                  },
                  'fc9c8238-7992-4475-8680-e56942ca7c3d': {
                    primer: '7307eb57-41ef-40f5-861a-1dcc72ac3f1e',
                    segon: 'ningu_mes'
                  }
                })
        ).toEqual(
            {
              '7307eb57-41ef-40f5-861a-1dcc72ac3f1e': {
                'menors': ['12a030f5-31f1-43d0-828b-168eb55471db', 'fc9c8238-7992-4475-8680-e56942ca7c3d'],
                'sustentadors': ['7307eb57-41ef-40f5-861a-1dcc72ac3f1e'],
                'monoparental': true
              }
            }
        );
      });
      it('Does not detect a family when there isn\'t one', () => {
        expect(
            detectaFamilies(
                {
                  '12a030f5-31f1-43d0-828b-168eb55471db': {
                    primer: 'no_conviu',
                    segon: 'ningu_mes'
                  }
                })
        ).toEqual(
            {}
        );
      });

      it('Does not detect a family when custodies is empty', () => {
        expect(
            detectaFamilies({})
        ).toEqual(
            {}
        );
      })
    }
);
