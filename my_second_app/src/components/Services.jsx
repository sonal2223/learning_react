const Services = () => {
    const services = [
        {
            id: 1,
            name: "Tree Plantation Drives",
            description: "Community events where we plant native trees to restore green cover.",
            duration: "Monthly",
            status: "Active",
        },
        {
            id: 2,
            name: "Wildlife Protection",
            description: "Awareness programs and support for protecting local animals and habitats.",
            duration: "Ongoing",
            status: "Active",
        },
        {
            id: 3,
            name: "Water Conservation",
            description: "Workshops that teach simple ways to save and reuse water at home.",
            duration: "Quarterly",
            status: "Active",
        },
        {
            id: 4,
            name: "Clean-Up Campaigns",
            description: "Beach, river, and park clean-ups to reduce plastic and pollution.",
            duration: "Weekly",
            status: "Upcoming",
        },
    ];

    return (
        <section
            id="services"
            style={{
                backgroundColor: "#e8f5e9",
                padding: "40px 0",
            }}
        >
            <div className="container">
                {/* Heading */}
                <div className="text-center" style={{ marginBottom: "30px" }}>
                    <h1 style={{ color: "#2d6a4f" }}>Our Services</h1>
                    <p style={{ color: "#1b4332", maxWidth: "600px", margin: "0 auto" }}>
                        Here are the ways we work every day to protect and
                        restore the natural world.
                    </p>
                </div>

                <div className="row">
                    <div className="md:col-12">
                        <div
                            style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "16px",
                                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.10)",
                                overflow: "hidden",
                            }}
                        >
                            <table
                                style={{
                                    width: "100%",
                                    borderCollapse: "collapse",
                                    backgroundColor: "#ffffff",
                                    color: "#1b4332",
                                    marginBottom: 0,
                                }}
                            >
                                <thead>
                                    <tr style={{ backgroundColor: "#2d6a4f" }}>
                                        {["#", "Service", "Description", "Frequency", "Status"].map((head) => (
                                            <th
                                                key={head}
                                                scope="col"
                                                style={{
                                                    padding: "14px",
                                                    color: "#ffffff",
                                                    backgroundColor: "#2d6a4f",
                                                    textAlign: "left",
                                                }}
                                            >
                                                {head}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {services.map((item, index) => {
                                        const rowBg = index % 2 === 0 ? "#ffffff" : "#f1f8f3";
                                        const cell = {
                                            padding: "14px",
                                            color: "#1b4332",
                                            backgroundColor: rowBg,
                                            borderBottom: "1px solid #d8f3dc",
                                        };
                                        return (
                                            <tr key={item.id}>
                                                <td style={cell}>{item.id}</td>
                                                <td style={{ ...cell, fontWeight: "600" }}>{item.name}</td>
                                                <td style={cell}>{item.description}</td>
                                                <td style={cell}>{item.duration}</td>
                                                <td style={cell}>
                                                    <span
                                                        style={{
                                                            backgroundColor:
                                                                item.status === "Active" ? "#b7e4c7" : "#ffe8a3",
                                                            color: "#1b4332",
                                                            padding: "4px 12px",
                                                            borderRadius: "20px",
                                                            fontSize: "0.85rem",
                                                        }}
                                                    >
                                                        {item.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;