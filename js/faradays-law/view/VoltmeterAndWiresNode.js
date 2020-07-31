// Copyright 2018-2020, University of Colorado Boulder

/**
 * A Node that holds the Voltmeter and the Voltmeter wires. This is handy for tech-io because we want both of these
 * child nodes to be controlled in the same way (with visibility, opacity etc).
 */

import inherit from '../../../../tech-core/js/inherit.js';
import merge from '../../../../tech-core/js/merge.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import faradaysLaw from '../../faradaysLaw.js';
import FaradaysLawConstants from '../FaradaysLawConstants.js';
import VoltmeterNode from './VoltmeterNode.js';
import VoltmeterWiresNode from './VoltmeterWiresNode.js';

/**
 * @param {NumberProperty} needleAngleProperty - angle of needle in voltmeter
 * @param {Tandem} tandem
 * @param {Object} [options]
 * @constructor
 */
function VoltmeterAndWiresNode( needleAngleProperty, tandem, options ) {

  options = merge( {
    tandem: tandem,
    techioDocumentation: 'The voltmeter and its connecting wires'
  }, options );

  Node.call( this, options );

  // pass an unmodified tandem in so that the VoltmeterNode's children look the this types children.
  const voltmeterNode = new VoltmeterNode( needleAngleProperty, tandem );
  const voltmeterWiresNode = new VoltmeterWiresNode( voltmeterNode );
  voltmeterNode.center = FaradaysLawConstants.VOLTMETER_POSITION;

  this.children = [ voltmeterNode, voltmeterWiresNode ];
}

faradaysLaw.register( 'VoltmeterAndWiresNode', VoltmeterAndWiresNode );

inherit( Node, VoltmeterAndWiresNode );
export default VoltmeterAndWiresNode;