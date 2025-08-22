// Booking Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Room prices
    const roomPrices = {
        'standard': 8500,
        'deluxe': 12500,
        'suite': 18500
    };
    
    // Room names
    const roomNames = {
        'standard': 'Standard Room',
        'deluxe': 'Deluxe Room',
        'suite': 'Executive Suite'
    };
    
    // Get form elements
    const bookingForm = document.getElementById('booking-form');
    const checkInInput = document.getElementById('checkIn');
    const checkOutInput = document.getElementById('checkOut');
    const adultsSelect = document.getElementById('adults');
    const childrenSelect = document.getElementById('children');
    const roomsSelect = document.getElementById('rooms');
    const roomTypeSelect = document.getElementById('roomType');
    
    // Get summary elements
    const summaryCheckIn = document.getElementById('summaryCheckIn');
    const summaryCheckOut = document.getElementById('summaryCheckOut');
    const summaryNights = document.getElementById('summaryNights');
    const summaryGuests = document.getElementById('summaryGuests');
    const summaryRoomType = document.getElementById('summaryRoomType');
    const summaryTotal = document.getElementById('summaryTotal');
    
    // Set minimum date for check-in (today)
    const today = new Date().toISOString().split('T')[0];
    checkInInput.min = today;
    
    // Update check-out minimum date when check-in changes
    checkInInput.addEventListener('change', function() {
        const checkInDate = new Date(this.value);
        const nextDay = new Date(checkInDate);
        nextDay.setDate(nextDay.getDate() + 1);
        checkOutInput.min = nextDay.toISOString().split('T')[0];
        
        // If check-out date is before check-in date, clear it
        if (checkOutInput.value && checkOutInput.value <= this.value) {
            checkOutInput.value = '';
        }
        
        updateBookingSummary();
    });
    
    // Update summary when check-out changes
    checkOutInput.addEventListener('change', updateBookingSummary);
    
    // Update summary when guests change
    adultsSelect.addEventListener('change', updateBookingSummary);
    childrenSelect.addEventListener('change', updateBookingSummary);
    
    // Update summary when rooms change
    roomsSelect.addEventListener('change', updateBookingSummary);
    
    // Update summary when room type changes
    roomTypeSelect.addEventListener('change', updateBookingSummary);
    
    // Function to update booking summary
    function updateBookingSummary() {
        const checkIn = checkInInput.value;
        const checkOut = checkOutInput.value;
        const adults = parseInt(adultsSelect.value) || 0;
        const children = parseInt(childrenSelect.value) || 0;
        const rooms = parseInt(roomsSelect.value) || 0;
        const roomType = roomTypeSelect.value;
        
        // Update summary display
        summaryCheckIn.textContent = checkIn || '-';
        summaryCheckOut.textContent = checkOut || '-';
        summaryGuests.textContent = adults + children > 0 ? `${adults + children} (${adults} adults, ${children} children)` : '-';
        summaryRoomType.textContent = roomType ? roomNames[roomType] : '-';
        
        // Calculate nights
        let nights = 0;
        if (checkIn && checkOut) {
            const checkInDate = new Date(checkIn);
            const checkOutDate = new Date(checkOut);
            const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
            nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
        }
        
        summaryNights.textContent = nights > 0 ? `${nights} night${nights > 1 ? 's' : ''}` : '-';
        
        // Calculate total
        let total = 0;
        if (roomType && nights > 0 && rooms > 0) {
            const pricePerNight = roomPrices[roomType];
            total = pricePerNight * nights * rooms;
        }
        
        summaryTotal.textContent = total > 0 ? `KES ${total.toLocaleString()}` : 'KES 0';
    }
    
    // Form validation
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const requiredFields = bookingForm.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('is-invalid');
                isValid = false;
            } else {
                field.classList.remove('is-invalid');
            }
        });
        
        // Date validation
        if (checkInInput.value && checkOutInput.value) {
            const checkInDate = new Date(checkInInput.value);
            const checkOutDate = new Date(checkOutInput.value);
            
            if (checkOutDate <= checkInDate) {
                checkOutInput.classList.add('is-invalid');
                isValid = false;
            } else {
                checkOutInput.classList.remove('is-invalid');
            }
        }
        
        // Email validation
        const emailInput = document.getElementById('email');
        if (emailInput.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailInput.classList.add('is-invalid');
                isValid = false;
            } else {
                emailInput.classList.remove('is-invalid');
            }
        }
        
        // Phone validation
        const phoneInput = document.getElementById('phone');
        if (phoneInput.value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(phoneInput.value.replace(/\s/g, ''))) {
                phoneInput.classList.add('is-invalid');
                isValid = false;
            } else {
                phoneInput.classList.remove('is-invalid');
            }
        }
        
        if (isValid) {
            // Show success message
            showBookingSuccess();
            
            // Reset form
            bookingForm.reset();
            updateBookingSummary();
            
            // Remove validation classes
            requiredFields.forEach(field => {
                field.classList.remove('is-invalid');
            });
        } else {
            showNotification('Please check your input and try again.', 'error');
        }
    });
    
    // Show booking success message
    function showBookingSuccess() {
        const successModal = document.createElement('div');
        successModal.className = 'modal fade';
        successModal.id = 'bookingSuccessModal';
        successModal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-success text-white">
                        <h5 class="modal-title">
                            <i class="fas fa-check-circle me-2"></i>
                            Booking Request Submitted!
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-center">
                        <div class="mb-4">
                            <i class="fas fa-envelope-open-text" style="font-size: 3rem; color: var(--primary-color);"></i>
                        </div>
                        <h4>Thank you for your booking request!</h4>
                        <p>We have received your reservation request and will confirm your booking within 24 hours.</p>
                        <p>A confirmation email has been sent to your email address with all the details.</p>
                        <div class="alert alert-info">
                            <strong>Booking Reference:</strong> LM-${Date.now().toString().slice(-6)}
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a href="index.html" class="btn btn-primary">Return to Home</a>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(successModal);
        
        const modal = new bootstrap.Modal(successModal);
        modal.show();
        
        // Remove modal from DOM after it's hidden
        successModal.addEventListener('hidden.bs.modal', function() {
            document.body.removeChild(successModal);
        });
    }
    
    // Real-time form validation
    const formInputs = bookingForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
                validateField(this);
            }
        });
    });
    
    function validateField(field) {
        const value = field.value.trim();
        
        // Remove existing validation classes
        field.classList.remove('is-invalid', 'is-valid');
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            field.classList.add('is-invalid');
            return false;
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('is-invalid');
                return false;
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/\s/g, ''))) {
                field.classList.add('is-invalid');
                return false;
            }
        }
        
        // Date validation
        if (field.type === 'date' && value) {
            const selectedDate = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (field.id === 'checkIn' && selectedDate < today) {
                field.classList.add('is-invalid');
                return false;
            }
            
            if (field.id === 'checkOut' && checkInInput.value) {
                const checkInDate = new Date(checkInInput.value);
                if (selectedDate <= checkInDate) {
                    field.classList.add('is-invalid');
                    return false;
                }
            }
        }
        
        // If field is valid and has value, add valid class
        if (value) {
            field.classList.add('is-valid');
        }
        
        return true;
    }
    
    // Auto-calculate total when form changes
    function calculateTotal() {
        const roomType = roomTypeSelect.value;
        const rooms = parseInt(roomsSelect.value) || 0;
        const checkIn = checkInInput.value;
        const checkOut = checkOutInput.value;
        
        if (roomType && rooms > 0 && checkIn && checkOut) {
            const checkInDate = new Date(checkIn);
            const checkOutDate = new Date(checkOut);
            const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 3600 * 24));
            
            if (nights > 0) {
                const pricePerNight = roomPrices[roomType];
                const total = pricePerNight * nights * rooms;
                summaryTotal.textContent = `KES ${total.toLocaleString()}`;
            }
        }
    }
    
    // Add event listeners for total calculation
    [checkInInput, checkOutInput, roomsSelect, roomTypeSelect].forEach(element => {
        element.addEventListener('change', calculateTotal);
    });
    
    // Initialize booking summary
    updateBookingSummary();
    
    console.log('Booking page JavaScript loaded successfully!');
});
