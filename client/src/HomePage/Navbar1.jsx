import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from './navbarData.js';
import './Navbar1.css';
// import logo from '../../assets/images/ENGINEERING GOLD.png';

// Mega Menu Component (for About Us, Parts & Products, Services, Contact Us)
const MegaMenu = ({ isOpen, activeMenuItem, activeSection, onSectionHover, onMenuLeave, nestedDropdownOpen, activeNestedItem, onNestedItemHover }) => {
  const megaMenuRef = useRef(null);

  useEffect(() => {
    if (isOpen && megaMenuRef.current && activeMenuItem) {
      const dropdown = megaMenuRef.current;
      const rect = dropdown.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      // Remove existing alignment classes
      dropdown.classList.remove('align-left', 'align-right');

      // Only apply viewport safety to centered dropdowns (about-us, parts-products)
      if (['about-us', 'parts-products'].includes(activeMenuItem)) {
        // Check if dropdown would overflow on the right
        if (rect.right > viewportWidth - 20) {
          dropdown.classList.add('align-right');
        }
        // Check if dropdown would overflow on the left
        else if (rect.left < 20) {
          dropdown.classList.add('align-left');
        }
      }
    }
  }, [isOpen, activeMenuItem]);

  if (!isOpen || !activeMenuItem) return null;

  const activeMenuData = menuData.find(item => item.id === activeMenuItem);
  if (!activeMenuData || !activeMenuData.hasDropdown) return null;

  // Only show mega menu for specific items
  if (!['about-us', 'parts-products', 'services', 'contact-us'].includes(activeMenuData.id)) {
    return null;
  }

  const getSections = () => {
    if (activeMenuData.id === 'about-us') {
      return [
        { id: 'group-companies', title: 'Group Companies', items: activeMenuData.columns[0].items },
        { id: 'group-websites', title: 'Group Websites', items: activeMenuData.columns[1].items },
        { id: 'policies', title: 'Policies', items: activeMenuData.columns[2].items },
        { id: 'group-businesses', title: 'Group Businesses', items: activeMenuData.columns2[0].items },
        { id: 'corporate-info', title: 'Corporate Information', items: activeMenuData.columns3[0].items }
      ];
    }

    if (activeMenuData.id === 'parts-products' || activeMenuData.id === 'services') {
      return [
        { id: 'col1', title: activeMenuData.columns[0].title, items: activeMenuData.columns[0].items },
        { id: 'col2', title: activeMenuData.columns2[0].title, items: activeMenuData.columns2[0].items },
        { id: 'col3', title: activeMenuData.columns3[0].title, items: activeMenuData.columns3[0].items }
      ];
    }

    if (activeMenuData.id === 'contact-us') {
      return [
        { id: 'contact-details', title: 'Contact Details', items: activeMenuData.contactItems },
        { id: 'opportunity', title: 'Opportunity', items: activeMenuData.opportunityItems }
      ];
    }

    return [];
  };

  const sections = getSections();
  const activeSectionData = sections.find(section => section.id === activeSection) || sections[0];

  return (
    <div
      ref={megaMenuRef}
      className="mega-menu-dropdown"
    >
      <div className="mega-menu-content">
        <div className="mega-menu-left">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`mega-menu-section-item ${activeSection === section.id ? 'active' : ''}`}
              onMouseEnter={() => onSectionHover(section.id)}
            >
              {section.title}
            </div>
          ))}
        </div>
        <div className="mega-menu-right">
          {activeSectionData && (
            <>
              <div className="mega-menu-right-column">
                {activeSection === 'group-businesses' ? (
                  activeSectionData.items.slice(0, Math.ceil(activeSectionData.items.length / 2)).map((item, index) => {
                    const internationalBusinessSubItem = activeMenuData.columns2[0].subItems?.find(subItem =>
                      subItem.title === 'International Business'
                    );

                    if (item.title === 'International Business' && internationalBusinessSubItem) {
                      return (
                        <div
                          key={index}
                          className="mega-menu-link nested-trigger"
                          onMouseEnter={() => onNestedItemHover('international-business')}
                        >
                          International Business
                          <span className="nested-arrow">→</span>
                        </div>
                      );
                    }
                    return (
                      <a
                        key={index}
                        href={item.href}
                        className="mega-menu-link"
                        {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                      >
                        {item.title}
                      </a>
                    );
                  })
                ) : (
                  activeSectionData.items.slice(0, Math.ceil(activeSectionData.items.length / 2)).map((item, index) => (
                    item.external ? (
                      <a
                        key={index}
                        href={item.href}
                        className="mega-menu-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link
                        key={index}
                        to={item.href}
                        className="mega-menu-link"
                      >
                        {item.title}
                      </Link>
                    )
                  ))
                )}
              </div>

              <div className="mega-menu-right-column">
                {activeSection === 'group-businesses' ? (
                  activeSectionData.items.slice(Math.ceil(activeSectionData.items.length / 2)).map((item, index) => {
                    const internationalBusinessSubItem = activeMenuData.columns2[0].subItems?.find(subItem =>
                      subItem.title === 'International Business'
                    );

                    if (item.title === 'International Business' && internationalBusinessSubItem) {
                      return (
                        <div
                          key={index}
                          className="mega-menu-link nested-trigger"
                          onMouseEnter={() => onNestedItemHover('international-business')}
                        >
                          International Business
                          <span className="nested-arrow">→</span>
                        </div>
                      );
                    }
                    return (
                      <a
                        key={index}
                        href={item.href}
                        className="mega-menu-link"
                        {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                      >
                        {item.title}
                      </a>
                    );
                  })
                ) : (
                  activeSectionData.items.slice(Math.ceil(activeSectionData.items.length / 2)).map((item, index) => (
                    item.external ? (
                      <a
                        key={index}
                        href={item.href}
                        className="mega-menu-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link
                        key={index}
                        to={item.href}
                        className="mega-menu-link"
                      >
                        {item.title}
                      </Link>
                    )
                  ))
                )}
              </div>
            </>
          )}
        </div>

        {/* Nested Dropdown for International Business */}
        {nestedDropdownOpen && activeNestedItem === 'international-business' && activeSection === 'group-businesses' && (
          <div className="nested-dropdown">
            <div className="nested-dropdown-content">
              {(() => {
                const internationalBusinessSubItem = activeMenuData.columns2[0].subItems?.find(subItem =>
                  subItem.title === 'International Business'
                );
                return internationalBusinessSubItem?.items?.map((item, index) => (
                  item.external ? (
                    <a
                      key={index}
                      href={item.href}
                      className="nested-dropdown-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={item.href}
                      className="nested-dropdown-link"
                    >
                      {item.title}
                    </Link>
                  )
                )) || [];
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Simple Dropdown Component (for Media and Login)
const SimpleDropdown = ({ isOpen, activeMenuItem, onMenuLeave }) => {
  const dropdownRef = useRef(null);

  if (!isOpen || !activeMenuItem) return null;

  const activeMenuData = menuData.find(item => item.id === activeMenuItem);
  if (!activeMenuData || !activeMenuData.hasDropdown || !activeMenuData.items) return null;

  // Determine if it should be two columns (Media) or single column (Login only)
  const isTwoColumn = activeMenuData.id !== 'login';

  return (
    <div
      ref={dropdownRef}
      className={`simple-dropdown ${isTwoColumn ? 'two-column' : 'single-column'}`}
    >
      <div className="simple-dropdown-content">
        {activeMenuData.items.map((item, index) => (
          item.external ? (
            <a
              key={index}
              href={item.href}
              className="simple-dropdown-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          ) : (
            <Link
              key={index}
              to={item.href}
              className="simple-dropdown-link"
            >
              {item.title}
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

// Mobile Menu Component (keeping existing functionality)
const MobileMenu = ({ isOpen, onClose, activeMobileMenu, onToggleMobileMenu, activeSubMenu, onToggleSubMenu, activeNestedMenu, onToggleNestedMenu, onCollapseAll }) => {
  if (!isOpen) return null;

  const hasExpandedItems = activeMobileMenu !== null || activeSubMenu !== null || activeNestedMenu !== null;

  const renderMobileSubmenu = (item) => {
    if (activeMobileMenu !== item.id) return null;

    if (item.id === 'about-us') {
      return (
        <div className="mobile-submenu">
          <div className="mobile-submenu-section">
            <button
              className="mobile-submenu-title expandable"
              onClick={() => onToggleSubMenu('col1')}
            >
              Group Companies
              <span className={`mobile-expand-icon ${activeSubMenu === 'col1' ? 'expanded' : ''}`}>
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </button>
            {activeSubMenu === 'col1' && (
              <div className="mobile-submenu-items">
                {item.columns[0].items.map((subItem, index) => (
                  subItem.external ? (
                    <a
                      key={index}
                      href={subItem.href}
                      className="mobile-submenu-item"
                      onClick={onClose}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {subItem.title}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={subItem.href}
                      className="mobile-submenu-item"
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>

          <div className="mobile-submenu-section">
            <button
              className="mobile-submenu-title expandable"
              onClick={() => onToggleSubMenu('col1-websites')}
            >
              Group Websites
              <span className={`mobile-expand-icon ${activeSubMenu === 'col1-websites' ? 'expanded' : ''}`}>
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </button>
            {activeSubMenu === 'col1-websites' && (
              <div className="mobile-submenu-items">
                {item.columns[1].items.map((subItem, index) => (
                  subItem.external ? (
                    <a
                      key={index}
                      href={subItem.href}
                      className="mobile-submenu-item"
                      onClick={onClose}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {subItem.title}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={subItem.href}
                      className="mobile-submenu-item"
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>

          <div className="mobile-submenu-section">
            <button
              className="mobile-submenu-title expandable"
              onClick={() => onToggleSubMenu('col1-policies')}
            >
              Policies
              <span className={`mobile-expand-icon ${activeSubMenu === 'col1-policies' ? 'expanded' : ''}`}>
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </button>
            {activeSubMenu === 'col1-policies' && (
              <div className="mobile-submenu-items">
                {item.columns[2].items.map((subItem, index) => (
                  subItem.external ? (
                    <a
                      key={index}
                      href={subItem.href}
                      className="mobile-submenu-item"
                      onClick={onClose}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {subItem.title}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={subItem.href}
                      className="mobile-submenu-item"
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>

          <div className="mobile-submenu-section">
            <button
              className="mobile-submenu-title expandable"
              onClick={() => onToggleSubMenu('col2')}
            >
              Group Businesses
              <span className={`mobile-expand-icon ${activeSubMenu === 'col2' ? 'expanded' : ''}`}>
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </button>
            {activeSubMenu === 'col2' && (
              <div className="mobile-submenu-items">
                {item.columns2[0].subItems?.map((subSection, subIndex) => (
                  <div key={`sub-section-${subIndex}`} className="mobile-sub-sub-section">
                    <button
                      className="mobile-sub-sub-title"
                      onClick={() => onToggleNestedMenu(subSection.id)}
                    >
                      <span className={`mobile-expand-icon ${activeNestedMenu === subSection.id ? 'expanded' : ''}`}>
                        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </span>
                      {subSection.title}
                    </button>

                    {activeNestedMenu === subSection.id && (
                      <div className="mobile-sub-sub-items">
                        {subSection.items?.map((nestedItem, nestedIndex) => (
                          nestedItem.external ? (
                            <a
                              key={nestedIndex}
                              href={nestedItem.href}
                              className="mobile-sub-sub-item"
                              onClick={onClose}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {nestedItem.title}
                            </a>
                          ) : (
                            <Link
                              key={nestedIndex}
                              to={nestedItem.href}
                              className="mobile-sub-sub-item"
                              onClick={onClose}
                            >
                              {nestedItem.title}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {item.columns2[0].items.map((subItem, index) => (
                  subItem.external ? (
                    <a
                      key={index}
                      href={subItem.href}
                      className="mobile-submenu-item"
                      onClick={onClose}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {subItem.title}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={subItem.href}
                      className="mobile-submenu-item"
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>

          <div className="mobile-submenu-section">
            <button
              className="mobile-submenu-title expandable"
              onClick={() => onToggleSubMenu('col3-info')}
            >
              Corporate Information
              <span className={`mobile-expand-icon ${activeSubMenu === 'col3-info' ? 'expanded' : ''}`}>
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </button>
            {activeSubMenu === 'col3-info' && (
              <div className="mobile-submenu-items">
                {item.columns3[0].items.map((subItem, index) => (
                  subItem.external ? (
                    <a
                      key={index}
                      href={subItem.href}
                      className="mobile-submenu-item"
                      onClick={onClose}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {subItem.title}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={subItem.href}
                      className="mobile-submenu-item"
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }

    if (item.id === 'parts-products' || item.id === 'services') {
      return (
        <div className="mobile-submenu">
          <div className="mobile-submenu-section">
            <div className="mobile-submenu-title">{item.columns[0].title}</div>
            <div className="mobile-submenu-items">
              {item.columns[0].items.map((subItem, index) => (
                subItem.external ? (
                  <a
                    key={index}
                    href={subItem.href}
                    className="mobile-submenu-item"
                    onClick={onClose}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {subItem.title}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={subItem.href}
                    className="mobile-submenu-item"
                    onClick={onClose}
                  >
                    {subItem.title}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="mobile-submenu-section">
            <div className="mobile-submenu-title">{item.columns2[0].title}</div>
            <div className="mobile-submenu-items">
              {item.columns2[0].items.map((subItem, index) => (
                subItem.external ? (
                  <a
                    key={index}
                    href={subItem.href}
                    className="mobile-submenu-item"
                    onClick={onClose}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {subItem.title}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={subItem.href}
                    className="mobile-submenu-item"
                    onClick={onClose}
                  >
                    {subItem.title}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="mobile-submenu-section">
            <div className="mobile-submenu-title">{item.columns3[0].title}</div>
            <div className="mobile-submenu-items">
              {item.columns3[0].items.map((subItem, index) => (
                subItem.external ? (
                  <a
                    key={index}
                    href={subItem.href}
                    className="mobile-submenu-item"
                    onClick={onClose}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {subItem.title}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={subItem.href}
                    className="mobile-submenu-item"
                    onClick={onClose}
                  >
                    {subItem.title}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="mobile-submenu">
        {item.items?.map((subItem, index) => (
          subItem.external ? (
            <a
              key={index}
              href={subItem.href}
              className="mobile-submenu-item"
              onClick={onClose}
              target="_blank"
              rel="noopener noreferrer"
            >
              {subItem.title}
            </a>
          ) : (
            <Link
              key={index}
              to={subItem.href}
              className="mobile-submenu-item"
              onClick={onClose}
            >
              {subItem.title}
            </Link>
          )
        ))}
        {item.contactItems && (
          <>
            <div className="mobile-submenu-section">
              <div className="mobile-submenu-title">Contact Details</div>
              <div className="mobile-submenu-items">
                {item.contactItems.map((subItem, index) => (
                  subItem.external ? (
                    <a
                      key={index}
                      href={subItem.href}
                      className="mobile-submenu-item"
                      onClick={onClose}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {subItem.title}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={subItem.href}
                      className="mobile-submenu-item"
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  )
                ))}
              </div>
            </div>
            <div className="mobile-submenu-section">
              <div className="mobile-submenu-title">Opportunity</div>
              <div className="mobile-submenu-items">
                {item.opportunityItems?.map((subItem, index) => (
                  subItem.external ? (
                    <a
                      key={index}
                      href={subItem.href}
                      className="mobile-submenu-item"
                      onClick={onClose}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {subItem.title}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={subItem.href}
                      className="mobile-submenu-item"
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <div className="mobile-menu-actions">
            {hasExpandedItems && (
              <button className="mobile-collapse-all" onClick={onCollapseAll}>
                Collapse All
              </button>
            )}
            <button className="mobile-menu-close" onClick={onClose}>×</button>
          </div>
        </div>
        <div className="mobile-menu-content">
          {menuData.map((item) => (
            <div key={item.id} className={`mobile-menu-item ${item.hasDropdown ? 'has-dropdown' : ''} ${activeMobileMenu === item.id ? 'expanded' : ''}`}>
              {item.hasDropdown ? (
                <div>
                  <button
                    className="mobile-menu-link"
                    onClick={() => onToggleMobileMenu(item.id)}
                  >
                    <div className="mobile-menu-link-content">
                      {item.icon && (
                        <span
                          className="mobile-menu-icon"
                          dangerouslySetInnerHTML={{ __html: item.icon }}
                        />
                      )}
                      {item.title}
                    </div>
                    <span className={`mobile-expand-icon ${activeMobileMenu === item.id ? 'expanded' : ''}`}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </button>
                  {renderMobileSubmenu(item)}
                </div>
              ) : (
                <Link
                  to={item.href}
                  className="mobile-menu-link"
                  onClick={onClose}
                >
                  <div className="mobile-menu-link-content">
                    {item.icon && (
                      <span
                        className="mobile-menu-icon"
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                      />
                    )}
                    {item.title}
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Navbar Component
const Navbar1 = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(false);
  const [activeNestedItem, setActiveNestedItem] = useState(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeNestedMenu, setActiveNestedMenu] = useState(null);
  const navbarRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const handleNavItemHover = (itemId) => {
    if (window.innerWidth > 768) {
      // Clear any pending close timeout
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setMegaMenuOpen(true);
      setActiveMenuItem(itemId);
      setActiveSection(null); // Reset section when switching menus
    }
  };

  const handleSectionHover = (sectionId) => {
    setActiveSection(sectionId);
    // Close nested dropdown when switching sections
    setNestedDropdownOpen(false);
    setActiveNestedItem(null);
  };

  const handleNestedItemHover = (itemId) => {
    if (itemId === 'international-business') {
      setNestedDropdownOpen(true);
      setActiveNestedItem(itemId);
    }
  };

  const handleMegaMenuLeave = () => {
    // Add a small delay to prevent flickering when moving between navbar and dropdown
    closeTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
      setActiveMenuItem(null);
      setActiveSection(null);
      setNestedDropdownOpen(false);
      setActiveNestedItem(null);
    }, 150);
  };

  const handleDropdownEnter = () => {
    // Cancel any pending close when entering dropdown
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMobileClick = (menuId, e) => {
    e.preventDefault();
    if (window.innerWidth <= 768) {
      setMobileMenuOpen(true);
    }
  };

  const toggleMobileMenu = (menuId) => {
    if (activeMobileMenu === menuId) {
      setActiveMobileMenu(null);
      setActiveSubMenu(null);
      setActiveNestedMenu(null);
    } else {
      setActiveMobileMenu(menuId);
      setActiveSubMenu(null);
      setActiveNestedMenu(null);
    }
  };

  const toggleSubMenu = (subMenuId) => {
    if (activeSubMenu === subMenuId) {
      setActiveSubMenu(null);
      setActiveNestedMenu(null);
    } else {
      setActiveSubMenu(subMenuId);
      setActiveNestedMenu(null);
    }
  };

  const toggleNestedMenu = (nestedMenuId) => {
    if (activeNestedMenu === nestedMenuId) {
      setActiveNestedMenu(null);
    } else {
      setActiveNestedMenu(nestedMenuId);
    }
  };

  const toggleMobileMenuOverlay = () => {
    if (!mobileMenuOpen) {
      setActiveMobileMenu(null);
      setActiveSubMenu(null);
      setActiveNestedMenu(null);
    }
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMobileMenu(null);
    setActiveSubMenu(null);
    setActiveNestedMenu(null);
  };

  const collapseAll = () => {
    setActiveMobileMenu(null);
    setActiveSubMenu(null);
    setActiveNestedMenu(null);
  };

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > 768;

      if (isDesktop && mobileMenuOpen) {
        setMobileMenuOpen(false);
        setActiveMobileMenu(null);
        setActiveSubMenu(null);
        setActiveNestedMenu(null);
      }

      if (!isDesktop) {
        setMegaMenuOpen(false);
        setActiveMenuItem(null);
        setActiveSection(null);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      // Clear timeout on unmount
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="navbar" ref={navbarRef} onMouseLeave={handleMegaMenuLeave}>
        <div className="navbar-container">
          <div className="navbar-brand">
            <img
              // src={logo}
              alt="JIGISHA GROUP"
              className="navbar-logo-img"
            />
          </div>

          <ul className="navbar-menu">
            {menuData.filter(item => item.id !== 'login').map((item) => (
              <li
                key={item.id}
                className={`navbar-item ${item.hasDropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => item.hasDropdown && handleNavItemHover(item.id)}
              >
                {item.href ? (
                  <Link
                    to={item.href}
                    className="navbar-link"
                    onClick={(e) => {
                      if (item.hasDropdown && window.innerWidth <= 768) {
                        e.preventDefault();
                        setMobileMenuOpen(true);
                      }
                      // For desktop: allow normal navigation, hover handles dropdown
                    }}
                  >
                    {item.icon && (
                      <span
                        className="navbar-icon"
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                      />
                    )}
                    {item.title}
                    {item.hasDropdown && (
                      <span className="dropdown-arrow">
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </span>
                    )}
                  </Link>
                ) : (
                  <button
                    className="navbar-link"
                    onClick={(e) => {
                      if (item.hasDropdown && window.innerWidth <= 768) {
                        e.preventDefault();
                        setMobileMenuOpen(true);
                      }
                      // For desktop: allow normal navigation, hover handles dropdown
                    }}
                  >
                    {item.icon && (
                      <span
                        className="navbar-icon"
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                      />
                    )}
                    {item.title}
                    {item.hasDropdown && (
                      <span className="dropdown-arrow">
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </span>
                    )}
                  </button>
                )}

                {item.hasDropdown && megaMenuOpen && activeMenuItem === item.id && (
                  <div onMouseEnter={handleDropdownEnter} onMouseLeave={handleMegaMenuLeave}>
                    {['about-us', 'parts-products', 'services', 'contact-us'].includes(item.id) ? (
                      <MegaMenu
                        isOpen={megaMenuOpen}
                        activeMenuItem={activeMenuItem}
                        activeSection={activeSection}
                        onSectionHover={handleSectionHover}
                        onMenuLeave={() => { }}
                        nestedDropdownOpen={nestedDropdownOpen}
                        activeNestedItem={activeNestedItem}
                        onNestedItemHover={handleNestedItemHover}
                      />
                    ) : (
                      <SimpleDropdown
                        isOpen={megaMenuOpen}
                        activeMenuItem={activeMenuItem}
                        onMenuLeave={() => { }}
                      />
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar-login">
            {(() => {
              const loginItem = menuData.find(item => item.id === 'login');
              return (
                <div
                  className="login-dropdown has-dropdown"
                  onMouseEnter={() => handleNavItemHover('login')}
                >
                  <button className="login-button">
                    Login
                    <span className="dropdown-arrow">
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </button>

                  {megaMenuOpen && activeMenuItem === 'login' && (
                    <div onMouseEnter={handleDropdownEnter} onMouseLeave={handleMegaMenuLeave}>
                      <SimpleDropdown
                        isOpen={megaMenuOpen}
                        activeMenuItem={activeMenuItem}
                        onMenuLeave={() => { }} // Remove individual menu leave handler
                      />
                    </div>
                  )}
                </div>
              );
            })()}
          </div>

          <div
            className={`navbar-mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenuOverlay}
          >
            <div className="hamburger-lines">
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        activeMobileMenu={activeMobileMenu}
        onToggleMobileMenu={toggleMobileMenu}
        activeSubMenu={activeSubMenu}
        onToggleSubMenu={toggleSubMenu}
        activeNestedMenu={activeNestedMenu}
        onToggleNestedMenu={toggleNestedMenu}
        onCollapseAll={collapseAll}
      />
    </>
  );
};

export default Navbar1;