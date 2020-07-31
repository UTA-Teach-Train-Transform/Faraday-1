/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';
import base64SoundToByteArray from '../../tambo/js/base64SoundToByteArray.js';
import WrappedAudioBuffer from '../../tambo/js/WrappedAudioBuffer.js';
import techAudioContext from '../../tambo/js/techAudioContext.js';

const soundURI = 'data:audio/mpeg;base64,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+mNWtQvO5Fsir88GWKljEaO8wTiPb3yz+vc218FYlUx6m+9aACbSrrsjsADPlpm0FKSCGuv4kRA1x9bgKHpMMihpY/vIp/KEBaNelwZMB4voLUyIGuhobH+T//syxOgASUi1Y6w85bD+Gyy1h5y2NJ6YyvrjPJM0w69aPQqvT1E/UAEmnG3ZKXwdACKYRh0kwIOMKE2EzuJeyEdrxfy9S/QtFxccDmSpKVL09dq+usUeUwfsSrcQSq8mld3y9QACSYCdXACg0zRg2OR+BWcCy8nEQN+5t86qL92tI8mwM5izNaZC8cqXpRoViYbvmggzDxvNRoLyY//7MsTnAAko22OsPEnxAJtstYYc5t26NEVzVaDx67wj76PSAC43Ei3HIAHgDIQZLXIQB9N+ktEKXKMVZqlrli0URT2c8jB8LqP6YhcNrjYx4/y0HRPaZlSv2nrlx0MpXOMK3sRviBUAM8xDLeAAAZGxnJiuUXmRVPbAjBQUMJ2oZu5DCflrTTad3hRv4EBcOd16inZvr+fvp4bzWb7/+zLE5gAJANtnrDxLsPaTrPWFiT5fKuqU0N7g21anBlG1iPVf+sAFCQSjYajYfj8WgAAAF+BeDkkhgNciIpYywD2YkDD4cGuIoSEmv4HkBIHCBrKYnX/AHbaX9rh4y9//PNTGQfyggssmYX//QsiCDqs00OUTE7TsFl///QhRHJlCF2j8VwxQozb1gQCFBPqVTEFNRTMuOTkuNVVV//swxOcASRTZZawsq7DvE601BJzuVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//syxOgACNzFVY0cUPENlaw1l5TmVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7MsTmgAjoWU1Vt4ABqBctNyLwAlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zLEu4PAAAGkHAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
const soundByteArray = base64SoundToByteArray( techAudioContext, soundURI );
const unlock = simLauncher.createLock( soundURI );
const wrappedAudioBuffer = new WrappedAudioBuffer();
const onDecodeSuccess = decodedAudio => {
  wrappedAudioBuffer.audioBufferProperty.set( decodedAudio );
  unlock();
};
const onDecodeError = decodeError => {
  console.warn( 'decode of audio data failed, using stubbed sound, error: ' + decodeError );
  wrappedAudioBuffer.audioBufferProperty.set( techAudioContext.createBuffer( 1, 0, techAudioContext.sampleRate ) );
  unlock();
};
techAudioContext.decodeAudioData( soundByteArray.buffer, onDecodeSuccess, onDecodeError );
export default wrappedAudioBuffer;