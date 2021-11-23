SELECT properties.city, count(property_reviews.*) as total_reservations
FROM properties
JOIN property_reviews ON property_id = properties.id
GROUP BY properties.city
ORDER BY total_reservations DESC;
