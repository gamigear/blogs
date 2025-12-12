"use client"

import React, { useState, useEffect } from 'react'
import PageHeader from '../shared/components/PageHeader'
import Card from '../shared/components/Card'
import useApi from '../shared/hooks/useApi'
import styles from './menus.module.scss'

interface MenuItem {
  id: number
  title: string
  url: string
  target: string
  icon: string | null
  order: number
  isActive: boolean
  parentId: number | null
  children?: MenuItem[]
}

interface Menu {
  id: number
  name: string
  location: string
  items: MenuItem[]
}

const MenusPage = () => {
  const [menus, setMenus] = useState<Menu[]>([])
  const [activeMenu, setActiveMenu] = useState<Menu | null>(null)
  const [showMenuModal, setShowMenuModal] = useState(false)
  const [editingMenu, setEditingMenu] = useState<Menu | null>(null)
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null)
  const { loading, get, post, put, del } = useApi()

  const [menuFormData, setMenuFormData] = useState({
    name: '',
    location: 'main'
  })

  const [formData, setFormData] = useState({
    title: '',
    url: '',
    target: '_self',
    icon: '',
    parentId: null as number | null
  })

  const fetchMenus = async () => {
    const data = await get('/api/admin/menus')
    if (data) {
      setMenus(data as Menu[])
      if (!activeMenu && data.length > 0) {
        setActiveMenu(data[0])
      } else if (activeMenu) {
        const updated = data.find((m: Menu) => m.id === activeMenu.id)
        if (updated) setActiveMenu(updated)
      }
    }
  }

  useEffect(() => {
    fetchMenus()
  }, [])

  // Menu CRUD
  const handleCreateMenu = async (e: React.FormEvent) => {
    e.preventDefault()
    let newMenu = null
    if (editingMenu) {
      await put(`/api/admin/menus/${editingMenu.id}`, menuFormData)
    } else {
      newMenu = await post('/api/admin/menus', menuFormData)
    }
    setShowMenuModal(false)
    setEditingMenu(null)
    setMenuFormData({ name: '', location: 'main' })
    
    // Fetch updated menus and set active menu
    const data = await get('/api/admin/menus')
    if (data) {
      setMenus(data as Menu[])
      // If created new menu, set it as active
      if (newMenu && newMenu.id) {
        const created = (data as Menu[]).find(m => m.id === newMenu.id)
        if (created) setActiveMenu(created)
      } else if (activeMenu) {
        const updated = (data as Menu[]).find(m => m.id === activeMenu.id)
        if (updated) setActiveMenu(updated)
      }
    }
  }

  const handleEditMenu = (menu: Menu) => {
    setEditingMenu(menu)
    setMenuFormData({ name: menu.name, location: menu.location })
    setShowMenuModal(true)
  }

  const handleDeleteMenu = async (menu: Menu) => {
    if (confirm(`Bạn có chắc muốn xóa menu "${menu.name}"? Tất cả mục menu sẽ bị xóa.`)) {
      await del(`/api/admin/menus/${menu.id}`)
      if (activeMenu?.id === menu.id) {
        setActiveMenu(null)
      }
      fetchMenus()
    }
  }

  const openCreateMenuModal = () => {
    setEditingMenu(null)
    setMenuFormData({ name: '', location: 'main' })
    setShowMenuModal(true)
  }

  // Menu Item CRUD
  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!activeMenu) return

    if (editingItem) {
      await put(`/api/admin/menu-items/${editingItem.id}`, formData)
    } else {
      await post(`/api/admin/menus/${activeMenu.id}/items`, formData)
    }

    resetItemForm()
    fetchMenus()
  }

  const handleEditItem = (item: MenuItem) => {
    setEditingItem(item)
    setFormData({
      title: item.title,
      url: item.url,
      target: item.target,
      icon: item.icon || '',
      parentId: item.parentId
    })
  }

  const handleDeleteItem = async (item: MenuItem) => {
    if (confirm(`Bạn có chắc muốn xóa menu "${item.title}"?`)) {
      await del(`/api/admin/menu-items/${item.id}`)
      fetchMenus()
    }
  }

  const handleToggleActive = async (item: MenuItem) => {
    await put(`/api/admin/menu-items/${item.id}`, {
      ...item,
      isActive: !item.isActive
    })
    fetchMenus()
  }

  const resetItemForm = () => {
    setEditingItem(null)
    setFormData({
      title: '',
      url: '',
      target: '_self',
      icon: '',
      parentId: null
    })
  }

  const addQuickLink = async (title: string, url: string, icon?: string) => {
    if (!activeMenu) return
    await post(`/api/admin/menus/${activeMenu.id}/items`, {
      title,
      url,
      target: '_self',
      icon
    })
    fetchMenus()
  }

  // Move item up/down
  const moveItem = async (item: MenuItem, direction: 'up' | 'down') => {
    if (!activeMenu) return
    
    const siblings = item.parentId 
      ? activeMenu.items.find(i => i.id === item.parentId)?.children || []
      : activeMenu.items
    
    const currentIndex = siblings.findIndex(i => i.id === item.id)
    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1
    
    if (newIndex < 0 || newIndex >= siblings.length) return
    
    const swapItem = siblings[newIndex]
    
    await Promise.all([
      put(`/api/admin/menu-items/${item.id}`, { ...item, order: swapItem.order }),
      put(`/api/admin/menu-items/${swapItem.id}`, { ...swapItem, order: item.order })
    ])
    
    fetchMenus()
  }

  const renderMenuItem = (item: MenuItem, index: number, siblings: MenuItem[]) => (
    <div key={item.id}>
      <div className={`${styles.menuItem} ${!item.isActive ? styles.inactive : ''}`}>
        <div className={styles.orderBtns}>
          <button 
            className={styles.orderBtn}
            onClick={() => moveItem(item, 'up')}
            disabled={index === 0}
            title="Di chuyển lên"
          >
            <i className="ri-arrow-up-s-line"></i>
          </button>
          <button 
            className={styles.orderBtn}
            onClick={() => moveItem(item, 'down')}
            disabled={index === siblings.length - 1}
            title="Di chuyển xuống"
          >
            <i className="ri-arrow-down-s-line"></i>
          </button>
        </div>
        <div className={styles.itemIcon}>
          <i className={item.icon || 'ri-link'}></i>
        </div>
        <div className={styles.itemInfo}>
          <div className={styles.itemTitle}>{item.title}</div>
          <div className={styles.itemUrl}>{item.url}</div>
        </div>
        <div className={styles.itemBadges}>
          {item.target === '_blank' && (
            <span className={styles.badge} title="Mở tab mới">
              <i className="ri-external-link-line"></i>
            </span>
          )}
          {item.children && item.children.length > 0 && (
            <span className={styles.childCount}>{item.children.length} con</span>
          )}
        </div>
        <div className={styles.itemActions}>
          <button 
            className={styles.actionBtn} 
            onClick={() => handleToggleActive(item)}
            title={item.isActive ? 'Ẩn' : 'Hiện'}
          >
            <i className={item.isActive ? 'ri-eye-line' : 'ri-eye-off-line'}></i>
          </button>
          <button 
            className={styles.actionBtn} 
            onClick={() => handleEditItem(item)}
            title="Sửa"
          >
            <i className="ri-edit-line"></i>
          </button>
          <button 
            className={`${styles.actionBtn} ${styles.danger}`} 
            onClick={() => handleDeleteItem(item)}
            title="Xóa"
          >
            <i className="ri-delete-bin-line"></i>
          </button>
        </div>
      </div>
      {item.children && item.children.length > 0 && (
        <div className={styles.subItems}>
          {item.children.map((child, idx) => renderMenuItem(child, idx, item.children!))}
        </div>
      )}
    </div>
  )

  const getLocationLabel = (location: string) => {
    const labels: Record<string, string> = {
      'main': 'Menu chính',
      'footer': 'Menu Footer',
      'mobile': 'Menu Mobile'
    }
    return labels[location] || location
  }

  return (
    <>
      <PageHeader 
        title="Quản lý Menu" 
        breadcrumbs={[{ label: 'Menu' }]}
        actions={
          <button className={styles.addBtn} onClick={openCreateMenuModal}>
            <i className="ri-add-line"></i>
            Tạo menu mới
          </button>
        }
      />

      {/* Menu Tabs */}
      <div className={styles.menuTabs}>
        {menus.map(menu => (
          <div key={menu.id} className={styles.menuTabWrapper}>
            <button
              className={`${styles.menuTab} ${activeMenu?.id === menu.id ? styles.active : ''}`}
              onClick={() => setActiveMenu(menu)}
            >
              <i className={menu.location === 'main' ? 'ri-menu-line' : menu.location === 'footer' ? 'ri-layout-bottom-line' : 'ri-smartphone-line'}></i>
              <span>{menu.name}</span>
              <small>({getLocationLabel(menu.location)})</small>
            </button>
            <div className={styles.menuTabActions}>
              <button onClick={() => handleEditMenu(menu)} title="Sửa menu">
                <i className="ri-edit-line"></i>
              </button>
              <button onClick={() => handleDeleteMenu(menu)} title="Xóa menu" className={styles.danger}>
                <i className="ri-delete-bin-line"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {loading ? (
        <div className={styles.loading}>Đang tải...</div>
      ) : activeMenu ? (
        <div className={styles.menuBuilder}>
          <Card title={`Cấu trúc menu: ${activeMenu.name}`}>
            <div className={styles.menuStats}>
              <span><i className="ri-list-check"></i> {activeMenu.items.length} mục gốc</span>
              <span><i className="ri-node-tree"></i> {activeMenu.items.reduce((acc, item) => acc + (item.children?.length || 0), 0)} mục con</span>
            </div>
            <div className={styles.menuItems}>
              {activeMenu.items.length === 0 ? (
                <div className={styles.emptyMenu}>
                  <i className="ri-menu-add-line"></i>
                  <p>Menu chưa có mục nào</p>
                  <p>Thêm mục menu từ form bên phải</p>
                </div>
              ) : (
                activeMenu.items.map((item, idx) => renderMenuItem(item, idx, activeMenu.items))
              )}
            </div>
          </Card>

          <div>
            <Card>
              <div className={styles.addItemForm}>
                <h4>{editingItem ? 'Sửa mục menu' : 'Thêm mục menu'}</h4>
                <form onSubmit={handleAddItem}>
                  <div className={styles.formGroup}>
                    <label>Tiêu đề *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={e => setFormData({...formData, title: e.target.value})}
                      placeholder="Nhập tiêu đề"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>URL *</label>
                    <input
                      type="text"
                      value={formData.url}
                      onChange={e => setFormData({...formData, url: e.target.value})}
                      placeholder="/duong-dan hoặc https://..."
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Icon (Remix Icon)</label>
                    <div className={styles.iconInput}>
                      <input
                        type="text"
                        value={formData.icon}
                        onChange={e => setFormData({...formData, icon: e.target.value})}
                        placeholder="ri-home-line"
                      />
                      {formData.icon && (
                        <span className={styles.iconPreview}>
                          <i className={formData.icon}></i>
                        </span>
                      )}
                    </div>
                    <small>
                      <a href="https://remixicon.com/" target="_blank" rel="noopener noreferrer">
                        Xem danh sách icon →
                      </a>
                    </small>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Mở trong</label>
                    <select
                      value={formData.target}
                      onChange={e => setFormData({...formData, target: e.target.value})}
                    >
                      <option value="_self">Cùng tab</option>
                      <option value="_blank">Tab mới</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Menu cha</label>
                    <select
                      value={formData.parentId || ''}
                      onChange={e => setFormData({...formData, parentId: e.target.value ? parseInt(e.target.value) : null})}
                    >
                      <option value="">-- Không có (menu gốc) --</option>
                      {activeMenu.items.map(item => (
                        <option key={item.id} value={item.id}>{item.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.formActions}>
                    {editingItem && (
                      <button type="button" className={styles.cancelBtn} onClick={resetItemForm}>
                        Hủy
                      </button>
                    )}
                    <button type="submit" className={styles.saveBtn}>
                      {editingItem ? 'Cập nhật' : 'Thêm mục'}
                    </button>
                  </div>
                </form>
              </div>

              <div className={styles.quickLinks}>
                <h5>Thêm nhanh</h5>
                <div className={styles.quickLinkGrid}>
                  <div className={styles.quickLinkItem} onClick={() => addQuickLink('Trang chủ', '/', 'ri-home-line')}>
                    <i className="ri-home-line"></i>
                    <span>Trang chủ</span>
                  </div>
                  <div className={styles.quickLinkItem} onClick={() => addQuickLink('Giới thiệu', '/gioi-thieu', 'ri-information-line')}>
                    <i className="ri-information-line"></i>
                    <span>Giới thiệu</span>
                  </div>
                  <div className={styles.quickLinkItem} onClick={() => addQuickLink('Tour', '/tour', 'ri-compass-line')}>
                    <i className="ri-compass-line"></i>
                    <span>Tour</span>
                  </div>
                  <div className={styles.quickLinkItem} onClick={() => addQuickLink('Tin tức', '/tin-tuc', 'ri-newspaper-line')}>
                    <i className="ri-newspaper-line"></i>
                    <span>Tin tức</span>
                  </div>
                  <div className={styles.quickLinkItem} onClick={() => addQuickLink('Liên hệ', '/lien-he', 'ri-phone-line')}>
                    <i className="ri-phone-line"></i>
                    <span>Liên hệ</span>
                  </div>
                  <div className={styles.quickLinkItem} onClick={() => addQuickLink('Đặt vé', '/dat-ve', 'ri-ticket-line')}>
                    <i className="ri-ticket-line"></i>
                    <span>Đặt vé</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        <Card>
          <div className={styles.emptyMenu}>
            <i className="ri-menu-add-line"></i>
            <p>Chưa có menu nào</p>
            <button className={styles.addBtn} onClick={openCreateMenuModal}>
              Tạo menu đầu tiên
            </button>
          </div>
        </Card>
      )}

      {/* Modal tạo/sửa Menu */}
      {showMenuModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>{editingMenu ? 'Sửa menu' : 'Tạo menu mới'}</h3>
              <button onClick={() => setShowMenuModal(false)}>
                <i className="ri-close-line"></i>
              </button>
            </div>
            <form onSubmit={handleCreateMenu}>
              <div className={styles.modalBody}>
                <div className={styles.formGroup}>
                  <label>Tên menu *</label>
                  <input
                    type="text"
                    value={menuFormData.name}
                    onChange={e => setMenuFormData({...menuFormData, name: e.target.value})}
                    placeholder="VD: Menu chính, Menu Footer..."
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Vị trí hiển thị</label>
                  <select
                    value={menuFormData.location}
                    onChange={e => setMenuFormData({...menuFormData, location: e.target.value})}
                  >
                    <option value="main">Menu chính (Header)</option>
                    <option value="footer">Menu Footer</option>
                    <option value="mobile">Menu Mobile</option>
                  </select>
                  <small>Vị trí này giúp xác định menu sẽ hiển thị ở đâu trên website</small>
                </div>
              </div>
              <div className={styles.modalFooter}>
                <button type="button" className={styles.cancelBtn} onClick={() => setShowMenuModal(false)}>
                  Hủy
                </button>
                <button type="submit" className={styles.saveBtn}>
                  {editingMenu ? 'Cập nhật' : 'Tạo menu'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default MenusPage
