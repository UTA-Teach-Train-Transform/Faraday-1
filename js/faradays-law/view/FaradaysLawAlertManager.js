// Copyright 2018-2020, University of Colorado Boulder


import Utterance from '../../../../utterance-queue/js/Utterance.js';
import faradaysLaw from '../../faradaysLaw.js';
import MagnetDescriber from './MagnetDescriber.js';

// the alert manager
class FaradaysLawAlertManager {

  constructor( describer ) {
    this.describer = describer;

    // @private {Utterance} - utterance for end of a keyboard movement, single utterance
    // gets added to the utteranceQueue to prevent too many alerts with this content
    this.keyboardMovementUtterance = new Utterance();
  }

  /**
   * @public
   */
  magnetFocusAlert() {
    const alert = this.describer.magnetFocusAlertText;
    tech.joist.sim.utteranceQueue.addToBack( alert );
  }

  /**
   * @public
   */
  movementEndAlert() {
    this.keyboardMovementUtterance.alert = this.describer.magnetMovedAlertText();
    tech.joist.sim.utteranceQueue.addToFront( this.keyboardMovementUtterance );
  }

  /**
   * @public
   * @param {OrientationEnum} orientation
   */
  flipMagnetAlert( orientation ) {
    const alert = this.describer.getFlipMagnetAlertText( orientation );
    tech.joist.sim.utteranceQueue.addToBack( alert );
  }

  /**
   * @public
   * @param speed
   * @param direction
   */
  static magnetSlidingAlert( speed, direction ) {
    const alert = MagnetDescriber.getMagnetSlidingAlertText( speed, direction );
    tech.joist.sim.utteranceQueue.addToFront( alert );
  }

  /**
   * @public
   * @param showVoltmeter
   */
  static voltmeterAttachmentAlert( showVoltmeter ) {
    const alert = MagnetDescriber.getVoltmeterAttachmentAlertText( showVoltmeter );
    tech.joist.sim.utteranceQueue.addToBack( alert );
  }

  /**
   * @public
   * @param showLines
   */
  static fieldLinesVisibilityAlert( showLines ) {
    const alert = MagnetDescriber.getFieldLinesVisibilityAlertText( showLines );
    tech.joist.sim.utteranceQueue.addToBack( alert );
  }

  /**
   * @public
   * @param showTopCoil
   */
  static coilConnectionAlert( showTopCoil ) {
    const alert = MagnetDescriber.getCoilConnectionAlertText( showTopCoil );
    tech.joist.sim.utteranceQueue.addToBack( alert );
  }
}

faradaysLaw.register( 'FaradaysLawAlertManager', FaradaysLawAlertManager );
export default FaradaysLawAlertManager;