import React, { useState } from 'react';
import EventCard, { EventCardData } from './EventCard'; // Import EventCard and data
import './DiscoveryPage.css'; // Assuming the DiscoveryPage CSS file

function DiscoveryPage() {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');

  const locations = ['Lagos', 'London'];

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setShowLocationDropdown(false); // Close dropdown after selection
  };

  const filteredEventCardData = (() => {
    if (selectedLocation === 'Lagos') {
      return EventCardData.filter((card) => [1, 2, 3].includes(card.id)).slice(0, 3); // Limit to 3 cards for Lagos
    }
    if (selectedLocation === 'London') {
      return EventCardData.filter((card) => [4, 5, 6].includes(card.id)).slice(0, 3); // Limit to 3 cards for London
    }
    return EventCardData.slice(0, 3); // Return first 3 cards by default if no location is selected
  })();

  return (
    <div className="discovery-page">
      <div className="discovery-container">
        {/* Main Search and Date Section */}
        <div className="search-section">
          <div className="bold-filter-title">Search by Event Name or Date</div>
          <input
            type="text"
            placeholder="Search for event name"
            className="search-bar"
          />
          <input type="date" className="date-picker" />
        </div>

        {/* Filters Section */}
        <div className="filters-section">
          <div className="bold-filter-title">FILTER BY LOCATION</div>
          <div className="filter">
            <button
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              className="filter-button"
            >
              {showLocationDropdown ? '▲' : '▼'}
            </button>
            {showLocationDropdown && (
              <div className="filter-options">
                {locations.map((location, index) => (
                  <button
                    key={index}
                    className="location-option"
                    onClick={() => handleLocationChange(location)}
                  >
                    {location}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Display Selected Filters */}
      <div className="selected-filters">
        <p>Selected Event Type: Concert</p>
        <p>Selected Location: Lagos</p>
      </div>

      {/* Render the filtered cards */}
      <div className="event-cards-container">
        <EventCard eventCardData={filteredEventCardData} />
      </div>
    </div>
  );
}

export default DiscoveryPage;

