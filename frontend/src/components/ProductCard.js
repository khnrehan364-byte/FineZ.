import { ExternalLink, Star, TrendingUp, Award } from 'lucide-react';
import { api } from '../utils/api';
import SocialShare from '../components/SocialShare';


const ProductCard = ({ product }) => {
  const handleClick = async () => {
    try {
      await api.trackClick(product.id);
      window.open(product.affiliate_link, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error tracking click:', error);
      window.open(product.affiliate_link, '_blank', 'noopener,noreferrer');
    }
  };
  
  const getCtaText = () => {
    if (product.type === 'affiliate') return 'Get Deal 🔥';
    if (product.type === 'idea') return 'Start Earning 💰';
    if (product.type === 'dropshipping') return 'Source Now 📦';
    return 'View Details →';
  };
  
  return (
    <div 
      data-testid={`product-card-${product.id}`}
      className="product-card product-card-hover masonry-item animate-fade-in group cursor-pointer"
      onClick={handleClick}
    >
      {/* Badges */}
      {product.premium && (
        <div className="premium-badge" data-testid="premium-badge">
          <Award className="w-3 h-3 inline mr-1" />
          PREMIUM
        </div>
      )}
      {product.featured && (
        <div className="featured-badge" data-testid="featured-badge">
          <TrendingUp className="w-3 h-3 inline mr-1" />
          TOP PICK
        </div>
      )}
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image_url} 
          alt={product.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Category & Type */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
            {product.category}
          </span>
          <span className="text-xs text-gray-400 capitalize">{product.type}</span>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-white line-clamp-2 group-hover:text-blue-400 transition-colors">
          {product.title}
        </h3>
        
        {/* Why This Product - Conversion Booster */}
        <p className="text-sm font-medium text-amber-300 flex items-start">
          {product.why_this_product}
        </p>
        
        {/* Description */}
        <p className="text-sm text-gray-400 line-clamp-2">
          {product.description}
        </p>
        
        {/* Rating & Price */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-white">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.review_count})</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <SocialShare product={product} />
            {product.price > 0 && (
              <div className="text-right">
                {product.original_price && (
                  <span className="text-xs text-gray-500 line-through mr-2">
                    ${product.original_price}
                  </span>
                )}
                <span className="text-lg font-bold text-white">
                  ${product.price}
                </span>
              </div>
            )}
            {product.price === 0 && (
              <span className="text-sm font-bold text-green-400">FREE</span>
            )}
          </div>
        </div>
        
        {/* CTA Button */}
        <button
          data-testid={`cta-button-${product.id}`}
          className="w-full btn-primary flex items-center justify-center space-x-2 group-hover:scale-105 transition-transform"
          onClick={handleClick}
        >
          <span>{getCtaText()}</span>
          <ExternalLink className="w-4 h-4" />
        </button>
        
        {/* Affiliate Network */}
        {product.affiliate_network && (
          <div className="flex items-center justify-center pt-1">
            <span className="text-xs text-gray-500">
              via {product.affiliate_network}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
