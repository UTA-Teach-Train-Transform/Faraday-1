// Copyright 2017-2020, University of Colorado Boulder

/**
 * Possible Edge types in 'Faradays Law' simulation for when a magnet is colliding with a coil during dragging.
 *
 *
 */

import faradaysLaw from '../../faradaysLaw.js';

const OrientationEnum = {
  NS: 'NS',
  SN: 'SN'
};

OrientationEnum.values = _.keys( OrientationEnum );
OrientationEnum.opposite = function( value ) {
  assert && assert( value === OrientationEnum.NS || value === OrientationEnum.SN, 'invalid enum value: ' + value );
  return value === OrientationEnum.NS ? OrientationEnum.SN : OrientationEnum.NS;
};

if ( assert ) { Object.freeze( OrientationEnum ); }

faradaysLaw.register( 'OrientationEnum', OrientationEnum );
export default OrientationEnum;