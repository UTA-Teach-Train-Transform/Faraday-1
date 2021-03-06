// Copyright 2014-2020, University of Colorado Boulder

/**
 * Flip Magnet button for 'Faradays Law' simulation, contains magnet image node.
 *
 * @author Vasily Shakhov (MLearner)
 * @author Sam Reid (tech Interactive Simulations)
 */

import Matrix3 from '../../../../dot/js/Matrix3.js';
import Shape from '../../../../kite/js/Shape.js';
import inherit from '../../../../tech-core/js/inherit.js';
import merge from '../../../../tech-core/js/merge.js';
import techFont from '../../../../scenery-tech/js/techFont.js';
import PDOMPeer from '../../../../scenery/js/accessibility/pdom/PDOMPeer.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Path from '../../../../scenery/js/nodes/Path.js';
import VBox from '../../../../scenery/js/nodes/VBox.js';
import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';
import faradaysLaw from '../../faradaysLaw.js';
import faradaysLawStrings from '../../faradaysLawStrings.js';
import MagnetNode from './MagnetNode.js';

const flipMagnetString = faradaysLawStrings.a11y.flipMagnet;
const flipPolesString = faradaysLawStrings.a11y.flipPoles;

/**
 * @param {Tandem} tandem
 * @param {Object} [options]
 * @constructor
 */
function FlipMagnetButton( tandem, options ) {

  const contentNode = new VBox( {
    children: [
      createCurvedArrow( 0 ),
      new MagnetNode( false, {
        width: 74,
        height: 16,
        font: new techFont( 14 )
      } ),
      createCurvedArrow( Math.PI )
    ],
    spacing: 1
  } );

  RectangularPushButton.call( this, merge( {
    content: contentNode,
    baseColor: 'rgb(205,254,195)',
    minWidth: 118,
    minHeight: 65,
    touchAreaXDilation: 10,
    touchAreaYDilation: 10,
    tandem: tandem,
    techioDocumentation: 'When pressed, changes the orientation of the bar magnet.',
    innerContent: flipMagnetString,
    descriptionContent: flipPolesString,
    appendDescription: true,
    containerTagName: 'li'
  }, options ) );

  this.addAriaDescribedbyAssociation( {
    otherNode: this,
    otherElementName: PDOMPeer.DESCRIPTION_SIBLING,
    thisElementName: PDOMPeer.PRIMARY_SIBLING
  } );
}

/**
 * Create curved arrow to display on the button
 * @param {number} rotation
 * @returns {Node}
 */
var createCurvedArrow = function( rotation ) {

  // variables for arrow and arc
  const radius = 20;
  const lineWidth = 2.3;
  const arcStartAngle = -Math.PI * 0.90;
  const arcEndAngle = -Math.PI * 0.18;

  const arcShape = new Shape()
    .moveTo( ( radius + lineWidth / 2 ) * Math.cos( arcStartAngle ), ( radius + lineWidth / 2 ) * Math.sin( arcStartAngle ) ) // Inner edge of end.
    .arc( 0, 0, radius, arcStartAngle, arcEndAngle, false ); // Outer curve.

  const matrix = Matrix3.translation( radius * Math.cos( arcEndAngle ), radius * Math.sin( arcEndAngle ) )
    .timesMatrix( Matrix3.rotation2( arcEndAngle ) );
  const arrowHeadShape = new Shape()
    .moveTo( 0, 8 )
    .lineTo( 4, 0 )
    .lineTo( -4, 0 )
    .close()
    .transformed( matrix );
  return new Node( {
    children: [ new Path( arcShape, {
      stroke: '#000',
      lineWidth: lineWidth
    } ), new Path( arrowHeadShape, {
      fill: '#000'
    } )
    ],
    rotation: rotation
  } );
};

faradaysLaw.register( 'FlipMagnetButton', FlipMagnetButton );

inherit( RectangularPushButton, FlipMagnetButton );
export default FlipMagnetButton;