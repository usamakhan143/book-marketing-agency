import React from 'react';
import DynamicScrollSection, { DynamicScrollItem, AlternatingScrollItem } from './DynamicScrollSection';
import { Star, Zap, Target, Rocket, Heart, Award } from 'lucide-react';

const AnimationShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Dynamic Scroll Animation Showcase</h1>
        <p className="text-center text-gray-600 mb-16">
          جب آپ scroll کریں گے تو دیکھیں کہ elements کیسے dynamic movement کے ساتھ آتے ہیں!
        </p>

        {/* Slide Up Animation */}
        <DynamicScrollSection
          className="bg-white rounded-xl p-8 mb-16 shadow-lg"
          animation="slideUp"
          threshold={0.3}
        >
          <div className="text-center">
            <DynamicScrollItem animation="slideDown" customDelay={0.2}>
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Slide Up Animation</h2>
              <p className="text-gray-600">This section slides up from bottom with smooth spring animation</p>
            </DynamicScrollItem>
          </div>
        </DynamicScrollSection>

        {/* Alternating Cards */}
        <DynamicScrollSection
          className="bg-white rounded-xl p-8 mb-16 shadow-lg"
          animation="slideLeft"
          threshold={0.3}
          stagger={true}
          staggerItemCount={3}
        >
          <DynamicScrollItem animation="rotate" customDelay={0.1}>
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-600">Alternating Slide Animation</h2>
          </DynamicScrollItem>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Star, title: "Left Slide", color: "bg-blue-100 text-blue-600" },
              { icon: Zap, title: "Right Slide", color: "bg-green-100 text-green-600" },
              { icon: Target, title: "Left Slide", color: "bg-purple-100 text-purple-600" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <AlternatingScrollItem key={index} index={index}>
                  <div className={`p-6 rounded-lg ${item.color}`}>
                    <Icon className="w-8 h-8 mb-4" />
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm opacity-80">Cards alternate between left and right slides</p>
                  </div>
                </AlternatingScrollItem>
              );
            })}
          </div>
        </DynamicScrollSection>

        {/* Bounce Animation */}
        <DynamicScrollSection
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl p-8 mb-16 shadow-lg"
          animation="bounce"
          threshold={0.3}
          stagger={true}
          staggerItemCount={3}
        >
          <DynamicScrollItem animation="flip" customDelay={0.2}>
            <h2 className="text-3xl font-bold mb-8 text-center">Bounce Animation</h2>
          </DynamicScrollItem>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Rocket, title: "Bounce Effect", desc: "Spring animation with bounce" },
              { icon: Heart, title: "Dynamic Entry", desc: "Engaging movement patterns" },
              { icon: Award, title: "Perfect Timing", desc: "Animations complete perfectly" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <DynamicScrollItem key={index} animation="bounce" index={index}>
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center">
                    <Icon className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.desc}</p>
                  </div>
                </DynamicScrollItem>
              );
            })}
          </div>
        </DynamicScrollSection>

        {/* Rotate Animation */}
        <DynamicScrollSection
          className="bg-gray-900 text-white rounded-xl p-8 mb-16 shadow-lg"
          animation="rotate"
          threshold={0.3}
          stagger={true}
          staggerItemCount={2}
        >
          <DynamicScrollItem animation="slideUp" customDelay={0.1}>
            <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Rotate & Flip Animation</h2>
          </DynamicScrollItem>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DynamicScrollItem animation="rotate" customDelay={0.3}>
              <div className="bg-yellow-400 text-gray-900 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">Rotate Entry</h3>
                <p>Elements rotate while sliding in for dynamic effect</p>
              </div>
            </DynamicScrollItem>
            
            <DynamicScrollItem animation="flip" customDelay={0.5}>
              <div className="bg-white text-gray-900 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">Flip Entry</h3>
                <p>3D flip animation creates engaging visual impact</p>
              </div>
            </DynamicScrollItem>
          </div>
        </DynamicScrollSection>

        {/* Final Section */}
        <DynamicScrollSection
          className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl p-12 text-center shadow-lg"
          animation="slideUp"
          threshold={0.3}
        >
          <DynamicScrollItem animation="bounce" customDelay={0.2}>
            <h2 className="text-4xl font-bold mb-4">🎉 Dynamic Animations Complete!</h2>
            <p className="text-xl opacity-90 mb-6">
              اب آپ کو مزیدار اور engaging scroll animations مل گئے ہیں!
            </p>
            <p className="opacity-80">
              Elements move naturally into their positions as you scroll, creating a fluid and professional experience.
            </p>
          </DynamicScrollItem>
        </DynamicScrollSection>
      </div>
    </div>
  );
};

export default AnimationShowcase;
