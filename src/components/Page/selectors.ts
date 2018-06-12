import { RootState } from 'store';
import { pageStateKey } from 'components/Page/reducer';

export const selectNumber = (state: RootState) => state[pageStateKey].number;
