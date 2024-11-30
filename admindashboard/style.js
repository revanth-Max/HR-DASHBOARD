// Example JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    // Mock data update
    const totalEmployees = document.getElementById('total-employees');
    const leaveRequests = document.getElementById('leave-requests');
    const pendingReviews = document.getElementById('pending-reviews');

    // Simulate real-time updates
    setTimeout(() => {
        totalEmployees.textContent = 55; // Updated value
        leaveRequests.textContent = 8;   // Updated value
        pendingReviews.textContent = 4; // Updated value
    }, 2000);

    console.log('HR Management Dashboard Loaded');
});
function loadPayroll() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <section class="details">
            <h2>Payroll Management</h2>
            <div class="payroll-actions">
                <button class="add-payroll-btn">Add Payroll</button>
                <button class="export-payroll-btn">Export Data</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Payment Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody id="payroll-table">
                    <tr>
                        <td>John Doe</td>
                        <td>Engineering</td>
                        <td>$5,000</td>
                        <td>2024-11-28</td>
                        <td><span class="status paid">Paid</span></td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>Marketing</td>
                        <td>$4,500</td>
                        <td>2024-11-28</td>
                        <td><span class="status pending">Pending</span></td>
                    </tr>
                    <tr>
                        <td>Emma Johnson</td>
                        <td>HR</td>
                        <td>$4,800</td>
                        <td>2024-11-28</td>
                        <td><span class="status paid">Paid</span></td>
                    </tr>
                </tbody>
            </table>
        </section>
    `;
}

// Update navigation handling
function navigateTo(page) {
    if (page === "dashboard") {
        document.getElementById("main-content").innerHTML = "<h2>Dashboard</h2><p>Welcome to the HR Management Dashboard.</p>";
    } else if (page === "employees") {
        populateTable(employees); // Function for employee page
    } else if (page === "leave-requests") {
        loadLeaveRequests();
    } else if (page === "payroll") {
        loadPayroll();
    } else {
        document.getElementById("main-content").innerHTML = `<h2>${page}</h2><p>Page under construction.</p>`;
    }
}

// Default load
document.addEventListener("DOMContentLoaded", () => {
    navigateTo("dashboard"); // Default page
});
function loadLeaveRequests() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <section class="details">
            <h2>Leave Requests</h2>
            <div class="leave-actions">
                <button class="add-leave-btn">Add Leave Request</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Department</th>
                        <th>Leave Type</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="leave-requests-table">
                    <tr>
                        <td>John Doe</td>
                        <td>Engineering</td>
                        <td>Sick Leave</td>
                        <td>2024-11-25</td>
                        <td>2024-11-28</td>
                        <td><span class="status pending">Pending</span></td>
                        <td>
                            <button class="approve-btn">Approve</button>
                            <button class="reject-btn">Reject</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>Marketing</td>
                        <td>Vacation</td>
                        <td>2024-12-01</td>
                        <td>2024-12-10</td>
                        <td><span class="status approved">Approved</span></td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Emma Johnson</td>
                        <td>HR</td>
                        <td>Maternity Leave</td>
                        <td>2024-12-15</td>
                        <td>2025-01-15</td>
                        <td><span class="status rejected">Rejected</span></td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </section>
    `;
}

// Add navigation handling
function navigateTo(page) {
    if (page === "leave-requests") {
        loadLeaveRequests();
    }
    // Add other navigation options as needed
}
function loadPerformance() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <section class="details">
            <h2>Employee Performance</h2>
            <div class="performance-actions">
                <button class="add-performance-btn">Add Performance Data</button>
                <button class="export-performance-btn">Export Data</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Department</th>
                        <th>Performance Score</th>
                        <th>Last Review</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody id="performance-table">
                    <tr>
                        <td>John Doe</td>
                        <td>Engineering</td>
                        <td><span class="score excellent">90</span></td>
                        <td>2024-11-15</td>
                        <td>Outstanding performance in project delivery.</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>Marketing</td>
                        <td><span class="score good">75</span></td>
                        <td>2024-11-10</td>
                        <td>Good campaign results.</td>
                    </tr>
                    <tr>
                        <td>Emma Johnson</td>
                        <td>HR</td>
                        <td><span class="score average">60</span></td>
                        <td>2024-10-25</td>
                        <td>Meets expectations.</td>
                    </tr>
                </tbody>
            </table>
        </section>
    `;
}

// Add navigation handling
function navigateTo(page) {
    if (page === "performance") {
        loadPerformance();
    }
    // Handle other pages as needed
}
document.addEventListener('DOMContentLoaded', () => {
    // Attach event listener to all view buttons
    const viewButtons = document.querySelectorAll('.view-button');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const employeeId = button.getAttribute('data-id'); // Get the employee ID
            // Navigate to the employee details page with the ID
            window.location.href = `employee-details.html?id=${employeeId}`;
        });
    });
});


