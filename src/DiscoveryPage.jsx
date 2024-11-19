import React, { useState } from 'react';
import EventCard, { EventCardData } from './EventCard'; // Correctly import EventCardData

function DiscoveryPage() {
  // State to handle the visibility of dropdown filters
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showEventTypeDropdown, setShowEventTypeDropdown] = useState(false);

  // State to handle selected filters
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedEventType, setSelectedEventType] = useState([]);

  // Sample locations and event types
  const locations = ['Lagos', 'Abuja', 'Rivers', 'Kano', 'Kaduna'];
  const eventTypes = ['Concerts', 'Arts', 'Conferences', 'Movies'];

  // Handler for filter change (search or date)
  const [filter, setFilter] = useState('event-name'); // Default filter
  const handleFilterChange = (e) => {
    setFilter(e.target.value); // Update filter when user selects
  };

  // Handlers for location and event type checkboxes
  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSelectedLocation((prevState) => {
      if (prevState.includes(location)) {
        return prevState.filter((loc) => loc !== location);
      } else {
        return [location]; // Only allow one location to be selected at a time
      }
    });
  };

  const handleEventTypeChange = (e) => {
    const eventType = e.target.value;
    setSelectedEventType((prevState) => {
      if (prevState.includes(eventType)) {
        return prevState.filter((type) => type !== eventType);
      } else {
        return [...prevState, eventType];
      }
    });
  };

  // Filter logic for cards
  const filteredEventCardData = (() => {
    if (selectedLocation.includes('Lagos')) {
      return EventCardData.filter((card) => [2, 5, 9].includes(card.id));
    }
    if (selectedLocation.includes('Abuja')) {
      return EventCardData.filter((card) => [1, 3, 4].includes(card.id));
    }
    if (selectedLocation.includes('Kaduna')) {
      return EventCardData.filter((card) => [6, 7, 8].includes(card.id));
    }
    if (selectedEventType.includes('Concerts')) {
      return EventCardData; // Display all cards for 'Concerts'
    }
    // Default display when no filters are selected
    return EventCardData.filter((card) => [2, 7, 9].includes(card.id));
  })();

  return (
    <div className="discovery-page">
      <div className="discovery-container">
        {/* Main Search and Date Section */}
        <div className="search-section">
          <div className="bold-filter-title"> Event Name or Date</div>
          <select className="filter-options" onChange={handleFilterChange}>
            <option value="event-name">Search by Event Name</option>
            <option value="date">Filter by Date</option>
          </select>
          {filter === 'event-name' ? (
            <input
              type="text"
              placeholder="Search for event name"
              className="search-bar"
            />
          ) : (
            <input type="date" className="date-picker" />
          )}
        </div>

        {/* Filters Section */}
        <div className="filters-section">
          <div className="bold-filter-title"> Location and Event Type</div>
          <div className="filter-container">
            {/* Location Filter */}
            <div className="filter">
              <button
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                className="filter-button"
              >
                Location {showLocationDropdown ? '▲' : '▼'}
              </button>
              {showLocationDropdown && (
                <div className="filter-options">
                  {locations.map((location, index) => (
                    <label key={index} className="checkbox-label">
                      <input
                        type="checkbox"
                        value={location}
                        checked={selectedLocation.includes(location)}
                        onChange={handleLocationChange}
                      />
                      {location}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Event Type Filter */}
            <div className="filter">
              <button
                onClick={() => setShowEventTypeDropdown(!showEventTypeDropdown)}
                className="filter-button"
              >
                Event Type {showEventTypeDropdown ? '▲' : '▼'}
              </button>
              {showEventTypeDropdown && (
                <div className="filter-options">
                  {eventTypes.map((eventType, index) => (
                    <label key={index} className="checkbox-label">
                      <input
                        type="checkbox"
                        value={eventType}
                        checked={selectedEventType.includes(eventType)}
                        onChange={handleEventTypeChange}
                      />
                      {eventType}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Displaying the selected filters */}
      <div className="selected-filters">
        <p>
          Selected Locations:{' '}
          {selectedLocation.length > 0 ? selectedLocation.join(', ') : 'None'}
        </p>
        <p>
          Selected Event Types:{' '}
          {selectedEventType.length > 0 ? selectedEventType.join(', ') : 'None'}
        </p>
      </div>

      {/* Render the filtered cards */}
      <div>
        <EventCard eventCardData={filteredEventCardData} />
      </div>
    </div>
  );
}

export default DiscoveryPage;



