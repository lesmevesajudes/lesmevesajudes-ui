import {detectaFamilies} from './FamilyForm';

it('Does not detect a monparental family when there are two parents', () => {
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
          'primerSustentador': '2844f3a8-a334-4baf-8f4a-762d3b7b1543',
          'segonSustentador': '7307eb57-41ef-40f5-861a-1dcc72ac3f1e',
          'monoparental': false
        }
      }
  );
});

it('Does not detect a monparental family when there are two parents', () => {
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
          'primerSustentador': '2844f3a8-a334-4baf-8f4a-762d3b7b1543',
          'segonSustentador': '7307eb57-41ef-40f5-861a-1dcc72ac3f1e',
          'monoparental': false
        }
      }
  );
});
