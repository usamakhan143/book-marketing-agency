import React from 'react';
import DynamicScrollSection, { DynamicScrollItem, AlternatingScrollItem } from './DynamicScrollSection';
import { Target, Rocket, Gem, Search, TrendingUp, Users, Star, Award } from 'lucide-react';

const AboutAnimationsDemo = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">About Page Animation Demo</h1>
          <p className="text-xl text-gray-600">
            ابتدا میں About page کے لیے same dynamic animations implement کیے گئے ہیں جو homepage میں ہیں!
          </p>
        </div>

        {/* Hero Animation Demo */}
        <div className="bg-gradient-to-br from-navy-900 to-navy-700 text-white rounded-xl p-12 mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Hero Section Animation</h2>
          <p className="text-gray-200 mb-6">Background scales in, title bounces up, text slides up sequentially</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
            <code className="text-green-300">Background: scale + fade | Title: bounce | Text: slide sequence</code>
          </div>
        </div>

        {/* Story Section Demo */}
        <DynamicScrollSection 
          className="bg-white rounded-xl p-8 mb-16 shadow-lg"
          animation="slideLeft"
          threshold={0.3}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <DynamicScrollItem animation="slideLeft" customDelay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-purple-600 mb-4">Our Story Animation</h2>
                <p className="text-gray-600 mb-4">
                  Text content slides in from left while image slides in from right, creating a balanced reveal.
                </p>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <code className="text-purple-800">slideLeft + slideRight = Dynamic Storytelling</code>
                </div>
              </div>
            </DynamicScrollItem>
            
            <DynamicScrollItem animation="slideRight" customDelay={0.4}>
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-48 rounded-lg flex items-center justify-center text-white">
                <div className="text-center">
                  <Users className="w-12 h-12 mx-auto mb-2" />
                  <span className="text-lg font-bold">Image Slide Right</span>
                </div>
              </div>
            </DynamicScrollItem>
          </div>
        </DynamicScrollSection>

        {/* Mission & Vision Demo */}
        <DynamicScrollSection 
          className="bg-gray-50 rounded-xl p-8 mb-16 shadow-lg"
          animation="slideUp"
          threshold={0.3}
          stagger={true}
          staggerItemCount={2}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Mission & Vision Animation</h2>
            <p className="text-gray-600">Both cards bounce in with staggered timing for impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DynamicScrollItem animation="bounce" customDelay={0.3}>
              <div className="bg-blue-100 p-6 rounded-lg text-center">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-800 mb-2">Mission - Bounce Left</h3>
                <p className="text-blue-600">First card bounces in with spring physics</p>
              </div>
            </DynamicScrollItem>
            
            <DynamicScrollItem animation="bounce" customDelay={0.5}>
              <div className="bg-green-100 p-6 rounded-lg text-center">
                <Rocket className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-2">Vision - Bounce Right</h3>
                <p className="text-green-600">Second card follows with delayed bounce</p>
              </div>
            </DynamicScrollItem>
          </div>
        </DynamicScrollSection>

        {/* Core Values Demo */}
        <DynamicScrollSection 
          className="bg-white rounded-xl p-8 mb-16 shadow-lg"
          animation="slideDown"
          threshold={0.3}
          stagger={true}
          staggerItemCount={3}
        >
          <DynamicScrollItem animation="slideDown" customDelay={0.2}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">Core Values Animation Variety</h2>
              <p className="text-gray-600">Each card has different animation for engaging sequence</p>
            </div>
          </DynamicScrollItem>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DynamicScrollItem animation="rotate" customDelay={0.4}>
              <div className="bg-orange-100 p-6 rounded-lg text-center border-2 border-orange-200">
                <Gem className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-orange-800 mb-2">Rotate Entry</h3>
                <p className="text-orange-600 text-sm">Spins while sliding in</p>
              </div>
            </DynamicScrollItem>

            <DynamicScrollItem animation="bounce" customDelay={0.6}>
              <div className="bg-yellow-100 p-6 rounded-lg text-center border-2 border-yellow-200">
                <Search className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-yellow-800 mb-2">Bounce Entry</h3>
                <p className="text-yellow-600 text-sm">Springs up with physics</p>
              </div>
            </DynamicScrollItem>

            <DynamicScrollItem animation="flip" customDelay={0.8}>
              <div className="bg-red-100 p-6 rounded-lg text-center border-2 border-red-200">
                <TrendingUp className="w-10 h-10 text-red-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-red-800 mb-2">Flip Entry</h3>
                <p className="text-red-600 text-sm">3D flip from side</p>
              </div>
            </DynamicScrollItem>
          </div>
        </DynamicScrollSection>

        {/* Team Alternating Demo */}
        <DynamicScrollSection 
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-8 mb-16 shadow-lg"
          animation="slideUp"
          threshold={0.3}
          stagger={true}
          staggerItemCount={6}
        >
          <DynamicScrollItem animation="slideUp" customDelay={0.2}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Team Section - Alternating Pattern</h2>
              <p className="text-indigo-100">6 team cards alternate between left and right slide animations</p>
            </div>
          </DynamicScrollItem>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Person 1", role: "Left Slide", icon: "P1" },
              { name: "Person 2", role: "Right Slide", icon: "P2" },
              { name: "Person 3", role: "Left Slide", icon: "P3" },
              { name: "Person 4", role: "Right Slide", icon: "P4" },
              { name: "Person 5", role: "Left Slide", icon: "P5" },
              { name: "Person 6", role: "Right Slide", icon: "P6" }
            ].map((person, index) => (
              <AlternatingScrollItem key={index} index={index}>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-white/30 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="font-bold">{person.icon}</span>
                  </div>
                  <h3 className="font-bold mb-1">{person.name}</h3>
                  <p className="text-sm opacity-90">{person.role}</p>
                </div>
              </AlternatingScrollItem>
            ))}
          </div>
        </DynamicScrollSection>

        {/* CTA Demo */}
        <DynamicScrollSection 
          className="bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-xl p-12 text-center shadow-lg"
          animation="bounce"
          threshold={0.3}
        >
          <DynamicScrollItem animation="slideUp" customDelay={0.2}>
            <h2 className="text-3xl font-bold mb-4">CTA Section - Sequential Reveal</h2>
          </DynamicScrollItem>
          
          <DynamicScrollItem animation="slideUp" customDelay={0.4}>
            <p className="text-xl text-green-100 mb-6">
              Title slides up, text follows, button bounces in last for maximum impact!
            </p>
          </DynamicScrollItem>
          
          <DynamicScrollItem animation="bounce" customDelay={0.6}>
            <div className="bg-white text-green-600 font-bold py-3 px-8 rounded-xl inline-block">
              🎉 Button Bounce Effect
            </div>
          </DynamicScrollItem>
        </DynamicScrollSection>

        {/* Summary */}
        <div className="bg-navy-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">🎊 About Page Animations Complete!</h2>
          <p className="text-xl text-gray-300 mb-6">
            تمام sections میں engaging اور professional animations implement ہو گئے ہیں!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 p-4 rounded-lg">
              <Star className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
              <span className="text-sm">Hero Sequence</span>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <Users className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <span className="text-sm">Story Split</span>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <Award className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <span className="text-sm">Values Variety</span>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <Target className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <span className="text-sm">Team Alternating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAnimationsDemo;
