// Rows configuration
export const SEAT_ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

// Seat columns grouped into clusters separated by aisles
export const SEAT_CLUSTERS = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

// Row J: Sweetbox Double Seats
export const SWEETBOX_PAIRS = [
  { id: 'J1-2', num: 1 },
  { id: 'J3-4', num: 3 },
  { id: 'J5-6', num: 5 },
  { id: 'J7-8', num: 7 },
  { id: 'J9-10', num: 9 },
];

// Predefined occupied seats
export const SOLD_SEATS = new Set(['B5', 'B6', 'C9', 'E5', 'E6', 'E7']);
export const SOLD_SWEETBOX = new Set(['J5-6']);

export const getSeatType = (row: string): 'standard' | 'vip' => {
  if (['A', 'B', 'C'].includes(row)) return 'standard';
  return 'vip';
};

export const getSeatPrice = (row: string): number => {
  if (['A', 'B', 'C'].includes(row)) return 110000;
  return 130000;
};

export const SWEETBOX_PRICE = 260000;
