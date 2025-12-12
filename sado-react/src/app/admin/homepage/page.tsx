"use client"

import React, { useState } from 'react'
import PageHeader from '../shared/components/PageHeader'
import Card from '../shared/components/Card'
import styles from './homepage.module.scss'

const HomepagePage = () => {
  const [activeTab, setActiveTab] = useState('hero')

  return (
    <>
      <PageHeader 
        title="Quản lý trang chủ" 
        breadcrumbs={[{ label: 'Trang chủ' }]}
        actions={
          <button className={styles.saveBtn}>
            <i className="ri-save-line"></i>
            Lưu thay đổi
          </button>
        }
      />

      <div className={styles.tabs}>
        <button className={activeTab === 'hero' ? styles.active : ''} onClick={() => setActiveTab('hero')}>
          <i className="ri-image-line"></i> Hero Banner
        </button>
        <button className={activeTab === 'destinations' ? styles.active : ''} onClick={() => setActiveTab('destinations')}>
          <i className="ri-map-pin-line"></i> Điểm đến nổi bật
        </button>
        <button className={activeTab === 'features' ? styles.active : ''} onClick={() => setActiveTab('features')}>
          <i className="ri-star-line"></i> Tính năng
        </button>
        <button className={activeTab === 'testimonials' ? styles.active : ''} onClick={() => setActiveTab('testimonials')}>
          <i className="ri-chat-quote-line"></i> Đánh giá
        </button>
        <button className={activeTab === 'cta' ? styles.active : ''} onClick={() => setActiveTab('cta')}>
          <i className="ri-megaphone-line"></i> CTA Section
        </button>
      </div>

      {activeTab === 'hero' && (
        <Card title="Hero Banner">
          <div className={styles.formGroup}>
            <label>Tiêu đề chính</label>
            <input type="text" defaultValue="Khám phá Việt Nam cùng chúng tôi" placeholder="Nhập tiêu đề" />
          </div>
          <div className={styles.formGroup}>
            <label>Mô tả ngắn</label>
            <textarea defaultValue="Đặt vé du lịch dễ dàng, nhanh chóng với giá tốt nhất" placeholder="Nhập mô tả" rows={3}></textarea>
          </div>
          <div className={styles.formGroup}>
            <label>Ảnh nền</label>
            <div className={styles.uploadArea}>
              <i className="ri-image-add-line"></i>
              <span>Kéo thả hoặc click để tải ảnh</span>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Text nút CTA</label>
              <input type="text" defaultValue="Đặt vé ngay" placeholder="Nhập text nút" />
            </div>
            <div className={styles.formGroup}>
              <label>Link nút CTA</label>
              <input type="text" defaultValue="/dat-ve" placeholder="Nhập link" />
            </div>
          </div>
        </Card>
      )}

      {activeTab === 'destinations' && (
        <Card title="Điểm đến nổi bật">
          <div className={styles.sectionHeader}>
            <div className={styles.formGroup}>
              <label>Tiêu đề section</label>
              <input type="text" defaultValue="Điểm đến phổ biến" placeholder="Nhập tiêu đề" />
            </div>
          </div>
          <div className={styles.itemsList}>
            {['Phú Quốc', 'Đà Nẵng', 'Nha Trang', 'Hạ Long'].map((dest, idx) => (
              <div key={idx} className={styles.item}>
                <div className={styles.itemImage}>
                  <i className="ri-image-line"></i>
                </div>
                <div className={styles.itemInfo}>
                  <input type="text" defaultValue={dest} placeholder="Tên điểm đến" />
                  <input type="text" placeholder="Mô tả ngắn" />
                </div>
                <div className={styles.itemActions}>
                  <button className={styles.moveBtn}><i className="ri-arrow-up-line"></i></button>
                  <button className={styles.moveBtn}><i className="ri-arrow-down-line"></i></button>
                  <button className={styles.deleteBtn}><i className="ri-delete-bin-line"></i></button>
                </div>
              </div>
            ))}
          </div>
          <button className={styles.addItemBtn}>
            <i className="ri-add-line"></i> Thêm điểm đến
          </button>
        </Card>
      )}

      {activeTab === 'features' && (
        <Card title="Tính năng nổi bật">
          <div className={styles.formGroup}>
            <label>Tiêu đề section</label>
            <input type="text" defaultValue="Tại sao chọn chúng tôi?" placeholder="Nhập tiêu đề" />
          </div>
          <div className={styles.featuresGrid}>
            {[
              { icon: 'ri-shield-check-line', title: 'An toàn', desc: 'Đảm bảo an toàn cho mọi chuyến đi' },
              { icon: 'ri-money-dollar-circle-line', title: 'Giá tốt', desc: 'Cam kết giá tốt nhất thị trường' },
              { icon: 'ri-customer-service-2-line', title: 'Hỗ trợ 24/7', desc: 'Luôn sẵn sàng hỗ trợ bạn' },
              { icon: 'ri-award-line', title: 'Chất lượng', desc: 'Dịch vụ chất lượng cao' },
            ].map((feature, idx) => (
              <div key={idx} className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className={feature.icon}></i>
                </div>
                <input type="text" defaultValue={feature.title} placeholder="Tiêu đề" />
                <textarea defaultValue={feature.desc} placeholder="Mô tả" rows={2}></textarea>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'testimonials' && (
        <Card title="Đánh giá khách hàng">
          <div className={styles.formGroup}>
            <label>Tiêu đề section</label>
            <input type="text" defaultValue="Khách hàng nói gì về chúng tôi" placeholder="Nhập tiêu đề" />
          </div>
          <div className={styles.testimonialsList}>
            {[
              { name: 'Nguyễn Văn A', content: 'Dịch vụ tuyệt vời, sẽ quay lại!' },
              { name: 'Trần Thị B', content: 'Giá cả hợp lý, nhân viên nhiệt tình' },
            ].map((item, idx) => (
              <div key={idx} className={styles.testimonialItem}>
                <div className={styles.testimonialAvatar}>
                  <i className="ri-user-line"></i>
                </div>
                <div className={styles.testimonialContent}>
                  <input type="text" defaultValue={item.name} placeholder="Tên khách hàng" />
                  <textarea defaultValue={item.content} placeholder="Nội dung đánh giá" rows={2}></textarea>
                </div>
                <button className={styles.deleteBtn}><i className="ri-delete-bin-line"></i></button>
              </div>
            ))}
          </div>
          <button className={styles.addItemBtn}>
            <i className="ri-add-line"></i> Thêm đánh giá
          </button>
        </Card>
      )}

      {activeTab === 'cta' && (
        <Card title="Call to Action Section">
          <div className={styles.formGroup}>
            <label>Tiêu đề</label>
            <input type="text" defaultValue="Sẵn sàng cho chuyến đi tiếp theo?" placeholder="Nhập tiêu đề" />
          </div>
          <div className={styles.formGroup}>
            <label>Mô tả</label>
            <textarea defaultValue="Đăng ký ngay để nhận ưu đãi đặc biệt" placeholder="Nhập mô tả" rows={2}></textarea>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Text nút</label>
              <input type="text" defaultValue="Đăng ký ngay" placeholder="Nhập text nút" />
            </div>
            <div className={styles.formGroup}>
              <label>Link nút</label>
              <input type="text" defaultValue="/dang-ky" placeholder="Nhập link" />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Ảnh nền</label>
            <div className={styles.uploadArea}>
              <i className="ri-image-add-line"></i>
              <span>Kéo thả hoặc click để tải ảnh</span>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}

export default HomepagePage
