/**
 * Introduce states as defined in
 * https://github.com/hyperledger/aries-rfcs/blob/main/features/0028-introduce/README.md#states
 */

export enum IntroduceState {
  Start = 'start',
  
  // Introducer states
  Arranging = 'arranging',
  Delivering = 'delivering',
  Confirming = 'confirming',
  Abandoning = 'abandoning',

  // Introducee states
  Requesting = 'requesting',
  Deciding = 'deciding',
  Waiting = 'waiting',
  
  Done = 'done',
}
