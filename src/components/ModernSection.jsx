import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const ModernSection = ({
  children,
  className = '',
  background = 'bg-white',
  padding = 'py-16 lg:py-24',
  maxWidth = 'max-w-7xl',
  animation = fadeInUp,
  stagger = false,
  id,
  ariaLabel,
  as = 'section',
  ...props
}) => {
  const [ref, , hasIntersected] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const Component = motion[as];
  const containerVariants = stagger ? staggerContainer : animation;

  return (
    <Component
      ref={ref}
      id={id}
      className={`relative ${background} ${padding} ${className}`}
      aria-label={ariaLabel}
      initial="initial"
      animate={hasIntersected ? "animate" : "initial"}
      variants={containerVariants}
      {...props}
    >
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${maxWidth} mx-auto`}>
        {children}
      </div>
    </Component>
  );
};

export const SectionHeader = ({ 
  badge, 
  title, 
  description, 
  center = true,
  className = '' 
}) => {
  const textAlign = center ? 'text-center' : 'text-left';
  
  return (
    <motion.div 
      className={`mb-12 lg:mb-16 ${textAlign} ${className}`}
      variants={staggerItem}
    >
      {badge && (
        <span className="inline-block text-gold-600 font-semibold text-lg mb-2 bg-gold-100 px-4 py-2 rounded-full">
          {badge}
        </span>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 lg:mb-6 leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export const GridContainer = ({ 
  children, 
  columns = 3, 
  gap = 'gap-6 lg:gap-8',
  className = '' 
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
  };

  return (
    <div className={`grid ${gridCols[columns]} ${gap} ${className}`}>
      {children}
    </div>
  );
};

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  features = [],
  badge,
  gradient = 'from-white to-gray-50',
  iconColor = 'text-gold-500',
  iconBg = 'bg-gold-500',
  hover = true,
  className = ''
}) => {
  return (
    <motion.div
      className={`
        relative group p-6 lg:p-8 rounded-2xl lg:rounded-3xl 
        bg-gradient-to-br ${gradient} border border-gray-100 
        ${hover ? 'hover:border-gold-200 hover:shadow-xl' : 'shadow-lg'}
        transition-all duration-500 overflow-hidden ${className}
      `}
      variants={staggerItem}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {badge}
        </div>
      )}

      {/* Icon */}
      {Icon && (
        <div className={`
          inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 
          ${iconBg} rounded-2xl shadow-lg mb-6 
          ${hover ? 'group-hover:scale-110 group-hover:shadow-xl' : ''}
          transition-all duration-300
        `}>
          <Icon className={`w-8 h-8 lg:w-10 lg:h-10 text-white`} />
        </div>
      )}

      {/* Content */}
      <div className="space-y-4">
        {title && (
          <h3 className="text-xl lg:text-2xl font-bold text-navy-900 leading-tight">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        )}

        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-gold-500 rounded-full mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Hover effect overlay */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-gold-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl lg:rounded-3xl" />
      )}
    </motion.div>
  );
};

export const StatCard = ({
  icon: Icon,
  number,
  suffix = '',
  label,
  description,
  color = 'text-gold-500',
  bgColor = 'bg-gold-500/10',
  className = '',
  labelClassName = 'text-navy-900',
  descriptionClassName = 'text-gray-600'
}) => {
  return (
    <motion.div
      className={`
        text-center p-6 lg:p-8 rounded-2xl bg-white shadow-lg 
        hover:shadow-xl border border-gray-100 hover:border-gold-200
        transition-all duration-300 ${className}
      `}
      variants={staggerItem}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {Icon && (
        <div className={`
          inline-flex items-center justify-center w-16 h-16 ${bgColor} 
          rounded-xl mb-4 mx-auto
        `}>
          <Icon className={`w-8 h-8 ${color}`} />
        </div>
      )}
      
      <div className="space-y-2">
        <div className={`text-3xl lg:text-4xl font-bold ${color}`}>
          {number}{suffix}
        </div>
        <div className={`text-lg font-semibold ${labelClassName}`}>{label}</div>
        {description && (
          <div className={`text-sm ${descriptionClassName}`}>{description}</div>
        )}
      </div>
    </motion.div>
  );
};

export default ModernSection;
